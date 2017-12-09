import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing/app-routing.module';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService} from './service/hero.service';
import { MessageService} from './service/message.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingComponent } from './app-routing/app-routing.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
],
  providers: [ HeroService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }