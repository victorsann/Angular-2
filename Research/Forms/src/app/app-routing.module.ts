import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component'
import { ReactiveComponent } from './reactive/reactive.component'

const routes: Routes = [

  { path: 'templateDriven', component: TemplateDrivenComponent },
  { path: 'reactive', component: ReactiveComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
