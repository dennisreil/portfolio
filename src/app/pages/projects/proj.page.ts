import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-proj',
  templateUrl: 'proj.page.html',
  styleUrls: ['proj.page.scss']
})
export class ProjPage {

  constructor(public popoverController: PopoverController) {}


timelyFe(){ window.open('https://github.com/dennisreil/timely-react', '_system'); }

timelyBe(){ window.open('https://github.com/dennisreil/timely-java', '_system'); }

ebookUrl(){ window.open('https://github.com/dennisreil/E-Book', '_system'); }


}
