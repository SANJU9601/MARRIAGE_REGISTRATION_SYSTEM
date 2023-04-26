import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegformComponent } from './regform/regform.component';
import { DivorceformComponent } from './divorceform/divorceform.component';
import { CertificateformComponent } from './certificateform/certificateform.component';
import { LostformComponent } from './lostform/lostform.component';

const routes: Routes = [
  {path:'', component:HomeComponent},

  {path:'adminlogin', component:AdminloginComponent},
  {path:'signup', component:SignupComponent},
  {path:'header', component:HeaderComponent},
  {path:'home', component:HomeComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'regform', component:RegformComponent},
  {path:'divorceform', component:DivorceformComponent},
  {path:'certificateform', component:CertificateformComponent},
  {path:'lostform', component:LostformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
