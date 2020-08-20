import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsPage } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: SkillsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsPageRoutingModule {}
