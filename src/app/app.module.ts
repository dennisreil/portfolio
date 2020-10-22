import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProjPopoverComponent } from './pages/projects/projPopover/projPopover.component';
import { SkillsPopoverComponent } from './pages/skills/skillsPopover/skillsPopover.component';
import { BioPopoverComponent } from './pages/bio/bioPopover/bioPopover.component';
import { HobbyPopoverComponent } from './pages/skills/hobbyPopover/hobbyPopover.component';


@NgModule({
  declarations: [AppComponent,
    SkillsPopoverComponent, 
    ProjPopoverComponent,
    BioPopoverComponent,
    HobbyPopoverComponent],
  entryComponents: [ SkillsPopoverComponent, 
    ProjPopoverComponent, 
    BioPopoverComponent,
    HobbyPopoverComponent ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
