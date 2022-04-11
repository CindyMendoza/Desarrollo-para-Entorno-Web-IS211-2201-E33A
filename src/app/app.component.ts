import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Burns';
  menu = [
    {
      nombre: "Proyecto", icon: "fa-table", datatarget: "#collapseProyecto", arialcontrol: "collapseProyecto", ruta:"",
      items: [
        { nombre: "Listar Proyecto", ruta: "/admin/proyecto/list", icon: "" },
        { nombre: "Registrar Proyecto", ruta: "/admin/proyecto/new", icon: "" }
      ]
    },
    {
      nombre: "Enlace", icon: "fa-fa-wrench", ruta:"",
      items: [
        { nombre: "Listar enlace", ruta: "/admin/enlace/list", icon: "" },
        { nombre: "Registrar enlace", ruta: "/admin/enlace/new", icon: "" }
      ]
    },
    {
      nombre: "repositorio", icon: "fa-folder", ruta:"",
      items: [
        { nombre: "Listar repositorio", ruta: "/admin/repositorio/list", icon: "" },
        { nombre: "Registrar repositorio", ruta: "/admin/repositorio/new", icon: "" }
      ]
    },
    {
      nombre: "cliente", icon: "fa-cog", ruta:"",
      items: [
        { nombre: "Listar cliente", ruta: "/admin/cliente/list", icon: "" },
        { nombre: "Registrar cliente", ruta: "/admin/cliente/new", icon: "" }
      ]
    },
    {
      nombre: "empleado", icon: "fa-cog", ruta:"",
      items: [
        { nombre: "Listar empleado", ruta: "/admin/empleado/list", icon: "" },
        { nombre: "Registrar empleado", ruta: "/admin/empleado/new", icon: "" }
      ]
    },
    {
      nombre: "configuracion", icon: "fa-cog", ruta:""
    }
  ];
}
