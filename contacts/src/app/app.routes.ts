import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { ContacComponent } from './contac/contac.component';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
    { path: 'root', component: AppComponent }, 
    { path: 'view', component:ViewComponent },
    { path: 'contact', component:ContacComponent },
    { path: 'detail', component:DetailComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes { }