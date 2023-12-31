import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/entitys/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  isLogged = false;
  isLoad = false;
  isError = false;

  experiencias: Experiencia[] = [];

  constructor(
    private router: Router,
    private experienciaService: ExperienciaService
  ) {
    this.obtenerExperiencias();
  }

  ngOnInit(): void {
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

  public obtenerExperiencias() {
    this.experiencias = this.experienciaService.get();
    this.experiencias.sort((e1, e2) => e1.numeroOrden - e2.numeroOrden);
    this.experiencias.forEach((element) => {
      if (element.anioFin == '') {
        element.anioFin = 'Actualidad';
      }
    });
    this.isLoad = true;
  }
}
