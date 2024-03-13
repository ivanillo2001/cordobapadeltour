import { Routes } from '@angular/router';

export const routes: Routes = [
   {
    path:'home',
    loadComponent:()=>import('./components/home/home.component').then(c=>c.HomeComponent)
   },
   {
    path:'login',
    loadComponent:()=>import('./components/login/login.component').then(c=>c.LoginComponent)
   },
    {//localhost:4200
        path:'',
        redirectTo:'/home',
        pathMatch:'full',//carga el path completo
    },
    {//path erroneo
        path:'**',
        loadComponent:()=>import('./components/pagina404/pagina404.component').then(c=>c.Pagina404Component)
    }
];
