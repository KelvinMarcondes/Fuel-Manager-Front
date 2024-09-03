import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomePageService } from '../../../services/home-page/home-page.service';
import { LoginRequestDto } from '../../../common/loginRequestDto';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
})

export class LoginComponent {

  constructor(private homePageService: HomePageService) { }

  emailLogin: string = ''
  passwordLogin: string = ''

  login() {

    const loginRequest = new LoginRequestDto();
    loginRequest.email = this.emailLogin;
    loginRequest.senha = this.passwordLogin;

    console.log(loginRequest) //apenas para eu ver se está certo input

    this.homePageService.login(loginRequest)
      .subscribe({
        next: (response) => {
          console.log('Login successful!', response);
        },
        error: (error) => {
          console.error('Error while logging in:', error);
        }
      });
  }

}
