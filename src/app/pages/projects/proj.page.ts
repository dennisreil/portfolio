import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ProjPopoverComponent } from './projPopover/projPopover.component';

@Component({
  selector: 'app-proj',
  templateUrl: 'proj.page.html',
  styleUrls: ['proj.page.scss']
})
export class ProjPage {

  constructor(public popoverController: PopoverController) {}
  
  async timelyFunc(eve, timely:string) {
    let timelyPop = await this.popoverController.create({
      component: ProjPopoverComponent,
      componentProps: {timely},
      cssClass: 'popOver',
      event: eve,
      translucent: true
    });
  
    return await timelyPop.present();
  }


  async ebookFunc(eve, ebook:string) {
    let ebookPop = await this.popoverController.create({
      component: ProjPopoverComponent,
      componentProps: {ebook},
      cssClass: 'popOver',
      event: eve,
      translucent: true
    });

    return await ebookPop.present();
}


timelyFe(){ window.open('https://github.com/dennisreil/timely-react', '_system'); }

timelyBe(){ window.open('https://github.com/dennisreil/timely-java', '_system'); }


ebookUrl(){ window.open('https://github.com/dennisreil/E-Book', '_system'); }


}
