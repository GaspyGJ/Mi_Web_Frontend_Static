import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../entitys/educacion';
import { educaciones } from '../Repositorio/educaciones';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(){}

  public get():Educacion[]{
    return  educaciones
  }
}
