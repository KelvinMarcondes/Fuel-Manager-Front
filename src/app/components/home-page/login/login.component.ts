import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginRequestDto } from '../../../common/homepageDtos';
import { LoginService } from '../../../services/login/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
})

export class LoginComponent {

  constructor(private loginService: LoginService, private router: Router) { }

  emailLogin: string = ''
  passwordLogin: string = ''

  login() {

    const loginRequest = new LoginRequestDto();
    loginRequest.email = this.emailLogin;
    loginRequest.password = this.passwordLogin;

    this.loginService.login(loginRequest)
    .subscribe({
      next: (response) => {
        const token = response.accessToken; // Supondo que o token esteja na propriedade 'token' da resposta
        this.loginService.saveToken(token);
        console.log('Login successful!', response);
        this.router.navigate(['/algo']);
      },
      error: (error) => {
        console.error('Error while logging in:', error);
      }
    });
  }

}
