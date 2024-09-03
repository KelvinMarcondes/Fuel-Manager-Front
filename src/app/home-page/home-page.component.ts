import { Component } from '@angular/core';
import { LoginComponent } from "./login/login.component";
import { CommonModule } from '@angular/common';
import { CadastroComponent } from "./cadastro/cadastro.component";
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [LoginComponent, CommonModule, CadastroComponent],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

  exibirLogin = true;

  alternarLoginCadastro(): void {
    this.exibirLogin = !this.exibirLogin;
  }



}
