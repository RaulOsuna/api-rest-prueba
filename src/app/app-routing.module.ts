import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../app/home/home.component";
import { TestDesignComponent } from "../app/test-design/test-design.component";
const routes: Routes = [
  {path:'page_new', component:HomeComponent, pathMatch: 'full' },
  {path:'design', component:TestDesignComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
