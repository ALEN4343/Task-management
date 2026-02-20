import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit{

  username = '';
  password = '';
  error = false;

  constructor(private auth: AuthService, private router: Router) {}



ngOnInit() {
  if (this.auth.isAuthenticated()) {
    this.router.navigate(['/']);
  }
}

loading = false;
showPassword = false;

togglePassword() {
  this.showPassword = !this.showPassword;
}

login() {
  this.loading = true;

  setTimeout(() => {
    if (this.username === 'admin' && this.password === 'admin') {
      this.auth.login();
      this.router.navigate(['/']);
    } else {
      this.error = true;
    }
    this.loading = false;
  }, 700);
}


}
