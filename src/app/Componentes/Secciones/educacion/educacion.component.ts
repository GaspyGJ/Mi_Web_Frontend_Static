import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/entitys/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  isLogged = false;
  isLoad = false;
  isError = false;

  educaciones: Educacion[] = [];

  constructor(
    private router: Router,
    private educacionService: EducacionService
  ) {
    this.obtenerEducaciones();
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

  public obtenerEducaciones() {
    this.educaciones = this.educacionService.get();
    this.educaciones.sort((e1, e2) => e1.numeroOrden - e2.numeroOrden);
    this.educaciones.forEach((element) => {
      if (element.anioFin == '') {
        element.anioFin = 'Actualidad';
      }
    });
    this.isLoad = true;
  }

}
