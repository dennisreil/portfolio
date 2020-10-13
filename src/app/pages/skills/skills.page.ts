import { Component  } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../../popover/popover.component';

@Component({
  selector: 'app-skills',
  templateUrl: 'skills.page.html',
  styleUrls: ['skills.page.scss']
})
export class SkillsPage {

  constructor(public popoverController: PopoverController) {
  }

  async hardSkill(eve, soft:string) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: {soft},
      cssClass: 'popOver',
      event: eve,
      translucent: true
    });
    return await popover.present();
  }

  async softSkill(eve, hard:string) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: {hard},
      cssClass: 'popOver',
      event: eve,
      translucent: true
    });

    return await popover.present();
  }
}