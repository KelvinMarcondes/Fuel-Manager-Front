import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroRequestDto } from '../../../common/homepageDtos';
import { LoginService } from '../../../services/login/login.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro.component.html',
})
export class CadastroComponent {

  constructor(private loginService: LoginService, private router: Router) { }

  nameCadastro: string = ''
  emailCadastro: string = ''
  passwordCadastro: string = ''

  cadastro() {

    const cadastroRequest = new CadastroRequestDto();
    cadastroRequest.name = this.nameCadastro;
    cadastroRequest.email = this.emailCadastro;
    cadastroRequest.password = this.passwordCadastro;

    this.loginService.cadastro(cadastroRequest)
    .subscribe({
      next: (response) => {
        console.log('Cadastro successful!', response);

        const token = response.accessToken; // Supondo que o token esteja na propriedade 'token' da resposta
        this.loginService.saveToken(token);
        this.router.navigate(['/algo']);

        


      },
      error: (error) => {
        console.error('Error while logging in:', error);
      }
    });
  }

}
