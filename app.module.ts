import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegformComponent } from './regform/regform.component';
import { DivorceformComponent } from './divorceform/divorceform.component';
import { CertificateformComponent } from './certificateform/certificateform.component';
import { LostformComponent } from './lostform/lostform.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    AdminloginComponent,
    HomeComponent,
    AboutusComponent,
    RegformComponent,
    DivorceformComponent,
    CertificateformComponent,
    LostformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
