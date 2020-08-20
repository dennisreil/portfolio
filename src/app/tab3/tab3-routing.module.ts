import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjPage } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: ProjPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjPageRoutingModule {}
