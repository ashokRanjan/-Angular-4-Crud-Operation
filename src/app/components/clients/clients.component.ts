import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients: any[];
  totalOwed: number;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClients().subscribe(client => {
      this.clients = client;
      this.getTotalOwed();
    });
  }
  
  getTotalOwed(){
    let total = 0;
    for(let i = 0;i < this.clients.length;i++){
      total += parseFloat(this.clients[i].salary);
    }
    this.totalOwed = total;
    console.log(this.totalOwed);
  }
}
