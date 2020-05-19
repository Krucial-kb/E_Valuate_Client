import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from 'app/dashboard/dashboard.component';


const routes: Routes = [
{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
{path: '/dashboard', component: DashboardComponent} 
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
