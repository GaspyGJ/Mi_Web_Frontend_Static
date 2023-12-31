import { Component, OnInit } from '@angular/core';
import { HardSkill } from 'src/app/entitys/hard_skill';
import { SoftSkill } from 'src/app/entitys/soft_skills';
import { Router } from '@angular/router';
import { HardSkillService } from 'src/app/service/hard-skill.service';
import { SoftSkillService } from 'src/app/service/soft-skill.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
})
export class HabilidadesComponent implements OnInit {
  isLogged: boolean = false;
  isLoadHardSkill: boolean = false;
  isLoadSoftSkill: boolean = false;
  isErrorHardSkill: boolean = false;
  isErrorSoftSkill: boolean = false;

  hardSkills: HardSkill[] = [];
  softSkills: SoftSkill[] = [];

  constructor(
    private router: Router,
    private hardSkillService: HardSkillService,
    private softSkillService: SoftSkillService
  ) {
    this.obtenerHardSkills();
    this.obtenerSoftSkills();
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

  public obtenerHardSkills() {
    this.hardSkills = this.hardSkillService.get();
    this.hardSkills.sort((hs1, hs2) => hs1.numeroOrden - hs2.numeroOrden);
    this.isLoadHardSkill = true;
  }

  protected obtenerSoftSkills() {
    this.softSkills = this.softSkillService.get();
    this.softSkills.sort((ss1, ss2) => ss1.numeroOrden - ss2.numeroOrden);
    this.isLoadSoftSkill = true;
  }
}
