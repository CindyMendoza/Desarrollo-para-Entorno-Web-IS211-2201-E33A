import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';

import { AppComponent } from './app.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { TeamComponent } from './pages/team/team.component';
import { ProjectNewComponent } from './access/project/project-new/project-new.component';
import { ProjectListComponent } from './access/project/project-list/project-list.component';
import { ApartmentNewComponent } from './access/apartment/apartment-new/apartment-new.component';
import { ApartmentListComponent } from './access/apartment/apartment-list/apartment-list.component';
import { ProjectComponent } from './pages/project/project.component';
import { ApartmentComponent } from './pages/apartment/apartment.component';

import { ClienteNewComponent } from './admin/cliente/cliente-new/cliente-new.component';
import { ClienteListComponent } from './admin/cliente/cliente-list/cliente-list.component';
import { ProyectoNewComponent } from './admin/proyecto/proyecto-new/proyecto-new.component';
import { ProyectoListComponent } from './admin/proyecto/proyecto-list/proyecto-list.component';
import { EmpleadoListComponent } from './admin/empleado/empleado-list/empleado-list.component';
import { EmpleadoNewComponent } from './admin/empleado/empleado-new/empleado-new.component';
//import { CargoComponent } from './admin/cargo/cargo.component';
import { CargoListComponent } from './admin/cargo/cargo-list/cargo-list.component';
import { CargoNewComponent } from './admin/cargo/cargo-new/cargo-new.component';
import { EnlaceNewComponent } from './admin/enlace/enlace-new/enlace-new.component';
import { EnlaceListComponent } from './admin/enlace/enlace-list/enlace-list.component';
import { RepositorioNewComponent } from './admin/repositorio/repositorio-new/repositorio-new.component';
import { RepositorioListComponent } from './admin/repositorio/repositorio-list/repositorio-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
    TeamComponent,
    ProjectNewComponent,
    ProjectListComponent,
    ApartmentNewComponent,
    ApartmentListComponent,
    ProjectComponent,
    ApartmentComponent,
    ClienteNewComponent,
    ClienteListComponent,
    ProyectoNewComponent,
    ProyectoListComponent,
    EmpleadoListComponent,
    EmpleadoNewComponent,
    //CargoComponent,
    CargoListComponent,
    CargoNewComponent,
    EnlaceNewComponent,
    EnlaceListComponent,
    RepositorioNewComponent,
    RepositorioListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
