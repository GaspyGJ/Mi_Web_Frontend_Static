import { Injectable } from '@angular/core';
import { Proyecto } from '../entitys/proyecto';
import { proyectos } from '../Repositorio/proyectos';


@Injectable({
  providedIn: 'root'
})
export class ProyectoService {


  constructor(){}


  public get():Proyecto[]{
    return proyectos
  }


}
