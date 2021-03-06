import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Client } from '../../models/Client';
import { SettingsService } from '../../services/settings.service';
@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {
  id:string;
  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    salary: 0
  };

  disableSalaryOnEdit: boolean = true;

  constructor(
    public clientService: ClientService,
    public router: Router,
    public route: ActivatedRoute,
    public flashMessagesServices: FlashMessagesService,
    public settingsService: SettingsService

  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    // Get client
    this.clientService.getClient(this.id).subscribe(client => {
      this.client = client;
    });

    this.disableSalaryOnEdit = this.settingsService.getSettings().disableSalaryOnEdit;
  }

  onSubmit({value, valid}: {value: Client, valid: boolean}){
    if (!valid) {
      this.flashMessagesServices.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 4000});
      this.router.navigate(['edit-client/' + this.id]);
    } else {
      // Update Client
      this.clientService.updateClient(this.id, value);
      this.flashMessagesServices.show('Client Updated', {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/']);
    }
  }

}
