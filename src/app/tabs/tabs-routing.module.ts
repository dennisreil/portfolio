import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'skills',
        loadChildren: () => import('../skills/skills.module').then(m => m.SkillsPageModule)
      },
      {
        path: 'bio',
        loadChildren: () => import('../bio/bio.module').then(m => m.BioPageModule)
      },
      {
        path: 'proj',
        loadChildren: () => import('../projects/proj.module').then(m => m.ProjPageModule)
      },
      {
        //redirects to Home IF loading blank path | localhost:4200
        path: '',
        redirectTo: '/bio',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
