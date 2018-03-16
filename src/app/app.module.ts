// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
// AngularFire Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
// Components Import
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { ClientsComponent } from './components/clients/clients.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SettingsComponent } from './components/settings/settings.component';
import { RegisterComponent } from './components/register/register.component';
// Service Imports
import { ClientService } from './services/client.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { RegisterGuard } from './guards/register.guard';
import { SettingsService } from './services/settings.service';
// Router Configuration
const appRoutes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [ AuthGuard ]},
  { path: 'register', component: RegisterComponent, canActivate: [ RegisterGuard ]},
  { path: 'login', component: LoginComponent},
  { path: 'add-client', component: AddClientComponent , canActivate: [ AuthGuard ]},
  { path: 'client/:id', component: ClientDetailsComponent , canActivate: [ AuthGuard ]},
  { path: 'edit-client/:id', component: EditClientComponent, canActivate: [ AuthGuard ]},
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]},
  { path: '**', component: PageNotFoundComponent}
];
// Firebase Configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCYxuFWThQW-CENejOrzSpvSn5051COgRY",
  authDomain: "first-project-914bc.firebaseapp.com",
  databaseURL: "https://first-project-914bc.firebaseio.com",
  projectId: "first-project-914bc",
  storageBucket: "",
  messagingSenderId: "187509914612"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddClientComponent,
    ClientDetailsComponent,
    ClientsComponent,
    DashboardComponent,
    EditClientComponent,
    LoginComponent,
    PageNotFoundComponent,
    SidebarComponent,
    SettingsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService,
    AuthService,
    AuthGuard,
    SettingsService,
    RegisterGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
