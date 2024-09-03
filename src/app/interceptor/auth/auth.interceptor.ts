import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HomePageService } from '../../services/home-page/home-page.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  constructor(private homePageService : HomePageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.homePageService.getToken();
    if (token) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}