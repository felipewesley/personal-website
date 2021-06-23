import { Component, OnInit } from '@angular/core';
import { SoftSkillModel } from '../../models/soft-skill.model';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.scss']
})
export class SoftSkillsComponent implements OnInit {

  public softSkills: SoftSkillModel[] = [
    {
      name: "Comprometimento",
      has: true
    }, {
      name: "Responsabilidade",
      has: true
    }, {
      name: "Capacidade de trabalhar com autonomia",
      has: true
    }, {
      name: "Aprendizado rápido",
      has: true
    }, {
      name: "Busca constante por aprendizado",
      has: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
