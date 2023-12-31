import { Injectable } from '@angular/core';
import { HardSkill } from '../entitys/hard_skill';
import { hardSkills } from '../Repositorio/hard_skills';

@Injectable({
  providedIn: 'root'
})
export class HardSkillService {

  constructor(){}

  public get(): HardSkill[]{
    return hardSkills
  }

}
