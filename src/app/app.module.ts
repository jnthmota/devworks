import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './core/pages/pages.module';
import { AuthModule } from './core/auth/auth.module';
import { CompanyModule } from './modules/company/company.module';
import { CandidateModule } from './modules/candidate/candidate.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    CompanyModule,
    CandidateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
