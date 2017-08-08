import { Injectable } from '@angular/core';

@Injectable()
export class SkillsService {

  constructor() { }

  getSkill() : string {
    return 'Banana peeler';
  }

}
