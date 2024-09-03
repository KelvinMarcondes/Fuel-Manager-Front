import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CadastroComponent } from "./cadastro/cadastro.component";
import { LoginComponent } from "./login/login.component";


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, CadastroComponent, LoginComponent],
  templateUrl: './home-page.component.html',
 })


export class HomePageComponent {

  constructor() {}

  exibirLogin = true;
  alternarLoginCadastro(): void {
    this.exibirLogin = !this.exibirLogin;
  }

}
