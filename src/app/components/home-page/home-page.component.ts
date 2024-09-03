import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginComponent } from "./login/login.component";
import { CadastroComponent } from "./cadastro/cadastro.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, LoginComponent, CadastroComponent],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

  exibirLogin = true;

  alternarLoginCadastro(): void {
    this.exibirLogin = !this.exibirLogin;
  }



}
