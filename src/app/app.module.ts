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


@NgModule({
  declarations: [AppComponent, SkillsPopoverComponent, ProjPopoverComponent],
  entryComponents: [ SkillsPopoverComponent, ProjPopoverComponent ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
