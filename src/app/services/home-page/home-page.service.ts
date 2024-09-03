import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequestDto } from '../../common/loginRequestDto';


@Injectable({
  providedIn: 'root'
})

export class HomePageService {

  private apiUrl = 'http://localhost:8080';

  private authToken: string | null = null;

  constructor(private http: HttpClient) {}

  login(loginRequestDto: LoginRequestDto){
    return this.http.post(`${this.apiUrl}/login`, loginRequestDto);
  }

  // Método para obter o token armazenado
  getToken(): string | null {
    return this.authToken;
  }

  
}


