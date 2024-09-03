import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequestDto } from '../../common/loginRequestDto';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class HomePageService {

  private apiUrl = 'http://localhost:8080';

  private authToken: string | null = null;

  constructor(private http: HttpClient) { }


  login(loginRequestDto: LoginRequestDto): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // Defina o cabeçalho Access-Control-Allow-Origin conforme necessário
    });

    return this.http.post(`${this.apiUrl}/login`, loginRequestDto, { headers })
      .pipe(
        // Aqui, você pode processar a resposta do backend
        // Por exemplo, armazenar o token retornado
        tap((response: any) => {
          if (response && response.token) {
            this.authToken = response.token;
          }
        })
      );
  }

  // Método para obter o token armazenado
  getToken(): string | null {
    return this.authToken;
  }

  
}


