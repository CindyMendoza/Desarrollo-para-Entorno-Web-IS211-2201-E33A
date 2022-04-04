import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ApartmentListComponent } from "./access/apartment/apartment-list/apartment-list.component";
import { ApartmentNewComponent } from "./access/apartment/apartment-new/apartment-new.component";
import { ProjectListComponent } from "./access/project/project-list/project-list.component";
import { ProjectNewComponent } from "./access/project/project-new/project-new.component";
import { AboutusComponent } from "./pages/aboutus/aboutus.component";
import { ApartmentComponent } from "./pages/apartment/apartment.component";
import { ContactusComponent } from "./pages/contactus/contactus.component";
import { HomeComponent } from "./pages/home/home.component";
import { ProjectComponent } from "./pages/project/project.component";
import { TeamComponent } from "./pages/team/team.component";

    //proyecto grupo 2
import { ProyectoNewComponent } from "./admin/proyecto/proyecto-new/proyecto-new.component";
import { ProyectoListComponent } from "./admin/proyecto/proyecto-list/proyecto-list.component";
import { ClienteNewComponent } from "./admin/cliente/cliente-new/cliente-new.component";
import { ClienteListComponent } from "./admin/cliente/cliente-list/cliente-list.component";
import { EmpleadoNewComponent } from "./admin/empleado/empleado-new/empleado-new.component";
import { EmpleadoListComponent } from "./admin/empleado/empleado-list/empleado-list.component";
import { CargoListComponent } from "./admin/cargo/cargo-list/cargo-list.component";
import { CargoNewComponent } from "./admin/cargo/cargo-new/cargo-new.component";
import { CargoComponent } from "./admin/cargo/cargo.component";
import { EnlaceListComponent } from "./admin/enlace/enlace-list/enlace-list.component";
import { EnlaceNewComponent } from "./admin/enlace/enlace-new/enlace-new.component";
import { RepositorioListComponent } from "./admin/repositorio/repositorio-list/repositorio-list.component";
import { RepositorioNewComponent } from "./admin/repositorio/repositorio-new/repositorio-new.component";


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'team', component: TeamComponent },
    { path: 'project/:id', component: ProjectComponent },
    { path: 'apartment/:idproject/:id', component: ApartmentComponent },

    { path: 'admin/project/new', component: ProjectNewComponent },
    { path: 'admin/project/list', component: ProjectListComponent },
    { path: 'admin/apartment/new', component: ApartmentNewComponent },
    { path: 'admin/apartment/list', component: ApartmentListComponent },
    //proyecto grupo 2
    { path: 'admin/proyecto/new', component: ProyectoNewComponent },
    { path: 'admin/proyecto/list', component: ProyectoListComponent },
    { path: 'admin/cliente/new', component: ClienteNewComponent },
    { path: 'admin/cliente/list', component: ClienteListComponent },
    { path: 'admin/empleado/new', component: EmpleadoNewComponent },
    { path: 'admin/empleado/list', component: EmpleadoListComponent },
    {path:'admin/cargo', component:CargoComponent},
    {path:'admin/cargo/new',component:CargoNewComponent},
    {path:'admin/cargo/list',component:CargoListComponent},
    {path:'admin/enlace/new',component:EnlaceNewComponent},
    {path:'admin/enlace/list',component:EnlaceListComponent},
    {path:'admin/repositorio/new',component:RepositorioNewComponent},
    {path:'admin/repositorio/list',component:RepositorioListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}