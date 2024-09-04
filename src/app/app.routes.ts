import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';

export const routes: Routes = [
    //paginas
    { path: 'login', component: HomePageComponent },
    { path: 'algo', component: HomePageComponent },
    
    // redirecionamento
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login', pathMatch: 'full' },
];
