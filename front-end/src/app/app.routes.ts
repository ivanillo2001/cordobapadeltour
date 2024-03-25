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
    path: 'primeraDivision',
    loadComponent: () =>
      import('./components/primera-division/primera-division.component').then((c) => c.PrimeraDivisionComponent),
  },
  {
    path: 'segundaDivision',
    loadComponent: () =>
      import('./components/segunda-division/segunda-division.component').then((c) => c.SegundaDivisionComponent),
  },
  {
    path: 'addJugador',
    loadComponent: () =>
      import('./components/crear-jugador/crear-jugador.component').then((c) => c.CrearJugadorComponent),
  },
  {
    //localhost:4200
    path: '',
    redirectTo: '/home',
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
