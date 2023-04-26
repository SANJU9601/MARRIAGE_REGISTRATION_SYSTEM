import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  username: string='';
  password: string='';
  
  message: string='';
  data: any;

  constructor(private router: Router) {}


  login(): void {
    if (this.username === 'email' && this.password === 'password') {
      this.message = 'Login Successful';
      this.router.navigate(['/header']);
    } else {
      this.message = 'Invalid username or password';
    }
  }
}
