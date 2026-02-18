import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { authGuard } from './guards/auth-guard';
import { Figures } from './pages/figures/figures';
import { AddFigure } from './pages/add-figure/add-figure';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard]
  },
  {
    path: 'figures',
    component: Figures,
    canActivate: [authGuard]
  },
  {
    path: 'add-figure',
    component: AddFigure,
    canActivate: [authGuard]
  }
];
