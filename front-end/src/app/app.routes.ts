import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(
        (c) => c.LoginComponent
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'crud',
    loadComponent: () =>
      import('./components/crud/crud.component').then((c) => c.CrudComponent),
  },
  {
    //localhost:4200
    path: '',
    redirectTo: '/login',
    pathMatch: 'full', //carga el path completo
  },
  {
    //path erroneo
    path: '**',
    loadComponent: () =>
      import('./components/pagina404/pagina404.component').then(
        (c) => c.Pagina404Component
      ),
  },
];
