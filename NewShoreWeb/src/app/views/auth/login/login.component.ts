import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  goToHome() {
    this.authService.authenticateUser();
    this.router.navigateByUrl('/home');
  }

}
