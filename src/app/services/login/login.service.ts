import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastroRequestDto, LoginRequestDto } from '../../common/homepageDtos';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  // Método para logar no backend 
  login(loginRequestDto: LoginRequestDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, loginRequestDto);
  }

   // Método para cadastrar no backend 
   cadastro(cadastroRequestDto: CadastroRequestDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/cadastro`, cadastroRequestDto);
  }

  // Método para armazenar o token
  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Método para obter o token
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  
  // Método para limpar o token
  clearToken(): void {
    localStorage.removeItem('token');
  }


}


