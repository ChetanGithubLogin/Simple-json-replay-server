import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServiceCallComponent} from '../app/service-call/service-call.component';
import { ThridPartyComponent } from './thrid-party/thrid-party.component';


const routes: Routes = [
  {path: 'service', component: ServiceCallComponent},
  {path: 'other', component: ThridPartyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
