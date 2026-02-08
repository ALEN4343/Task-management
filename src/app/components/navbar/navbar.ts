import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {
  constructor(public auth: AuthService) {}

  login() {
    this.auth.login();
    alert('Logged in (mock)');
  }

  logout() {
    this.auth.logout();
    alert('Logged out');
  }
}
