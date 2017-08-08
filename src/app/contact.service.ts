import { Inject, Injectable } from '@angular/core';
import { SkillsService} from './skills.service'

@Injectable()
export class ContactService {

  constructor(@Inject(SkillsService) private skillsService : SkillsService) { }

  getContact() : any {
    return {
      name : 'Joe Bloggs',
      skill: this.skillsService.getSkill()
    }
  }

}
