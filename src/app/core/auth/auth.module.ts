import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { RegisterCandidateComponent } from './register-candidate/register-candidate.component';



@NgModule({
  declarations: [LoginComponent, RegisterCompanyComponent, RegisterCandidateComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
