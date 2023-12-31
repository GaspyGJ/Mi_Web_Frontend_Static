import { Injectable } from '@angular/core';
import { SoftSkill } from '../entitys/soft_skills';
import { softSkills } from '../Repositorio/soft_skills';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillService {

  constructor(){}

  public get():SoftSkill[]{
    return softSkills
  }

}