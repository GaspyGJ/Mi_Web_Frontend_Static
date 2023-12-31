import { Injectable } from '@angular/core';
import { Experiencia } from '../entitys/experiencia';
import { experiencias } from '../Repositorio/experiencias';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(){}

  public get(): Experiencia[]{
    return experiencias
  }

}
