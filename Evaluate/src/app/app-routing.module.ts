import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path:'home', component: HomePageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'login', component: LoginComponent},


  //Always redirect to here!
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
