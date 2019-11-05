import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';

import { HomeComponent } from './core/pages/home/home.component';
import { RegisterCandidateComponent } from './core/auth/register-candidate/register-candidate.component';
import { RegisterCompanyComponent } from './core/auth/register-company/register-company.component';
import { 
  AuthGuardService as AuthGuard 
} from './core//helpers/auth-guard.service';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register-candidate",
    component: RegisterCandidateComponent
  },
  {
    path: "register-company",
    component: RegisterCompanyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
