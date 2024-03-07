import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { ContactsService } from './services/contacts.service';
import { AppComponent } from './app.component';
import { ContacComponent } from './contac/contac.component';
import { AppRoutes } from './app.routes';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    ContacComponent,
    DetailComponent
  ],
  imports: [
    CommonModule, 
    BrowserModule,
    HttpClientModule,
    AppRoutes 
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
