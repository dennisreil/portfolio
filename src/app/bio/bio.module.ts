import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BioPage } from './bio.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { BioRoutingModule } from './bio-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    BioRoutingModule
  ],
  declarations: [BioPage]
})
export class BioPageModule {}
