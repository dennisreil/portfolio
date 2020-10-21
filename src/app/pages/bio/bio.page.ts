import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { BioPopoverComponent } from '../bio/bioPopover/bioPopover.component';

@Component({
  selector: 'app-bio',
  templateUrl: 'bio.page.html',
  styleUrls: ['bio.page.scss']
})
export class BioPage {

  constructor(public popoverController: PopoverController) {}

  async bio(eve, bio:string) {
    let bioPop = await this.popoverController.create({
      mode: 'md',
      component: BioPopoverComponent,
      componentProps: {bio},
      cssClass: 'popOver',
      event: eve,
      translucent: true
    });

    return await bioPop.present();
  }

}
