import { Component  } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { HobbyPopoverComponent } from './hobbyPopover/hobbyPopover.component';
import { SkillsPopoverComponent } from './skillsPopover/skillsPopover.component';

@Component({
  selector: 'app-skills',
  templateUrl: 'skills.page.html',
  styleUrls: ['skills.page.scss']
})
export class SkillsPage {

  constructor(public popoverController: PopoverController) {
  }

  async hardSkill(eve, soft:string) {
    let hardPopover = await this.popoverController.create({
      mode: 'md',
      component: SkillsPopoverComponent,
      componentProps: {soft},
      cssClass: 'popOver',
      event: eve,
      translucent: true
    });
    return await hardPopover.present();
  }

  async softSkill(eve, hard:string) {
    let softPopover = await this.popoverController.create({
      mode: 'md',
      component: SkillsPopoverComponent,
      componentProps: {hard},
      cssClass: 'popOver',
      event: eve,
      translucent: true
    });

    return await softPopover.present();
  }

  async hobbyList(eve, hobbies:string) {
    let hobbyPop = await this.popoverController.create({
      mode: 'md',
      component: HobbyPopoverComponent,
      componentProps: {hobbies},
      cssClass: 'popOver',
      event: eve,
      translucent: true
    });

    return await hobbyPop.present();
  }
}