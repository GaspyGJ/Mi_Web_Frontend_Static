import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/entitys/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  isLogged = false;
  isLoad = false;
  isError = false;

  proyectos: Proyecto[] = [];

  constructor(
    private router: Router,
    private proyectoService: ProyectoService
  ) {}

  ngOnInit(): void {
    this.obtenerProyectos();
    this.addAnimacionIn();
  }

  addAnimacionIn() {
    const element = document.getElementsByClassName('container-seccion');
    element[0].classList.add('container-seccion-animacion-in');
  }
  volver() {
    const element = document.getElementsByClassName('container-seccion');
    element[0].classList.remove('container-seccion-animacion-in');
    element[0].classList.add('container-seccion-animacion-out');
    setTimeout(() => {
      this.router.navigate(['/navegacion']);
    }, 1000);
  }

  public obtenerProyectos() {
    this.proyectos = this.proyectoService.get();
    this.proyectos.sort((p1, p2) => p1.numeroOrden - p2.numeroOrden);
    this.isLoad = true;
  }
}
