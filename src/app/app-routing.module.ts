import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { SwPeopleListComponent } from './sw-people-list/sw-people-list.component';

const routes: Routes = [
  {
    path: '',
    component: SwPeopleListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
