import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SkillsPage } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SkillsPageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SkillsPageRoutingModule
  ],
  declarations: [SkillsPage]
})
export class SkillsPageModule {}
