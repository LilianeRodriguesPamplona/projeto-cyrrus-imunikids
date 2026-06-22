import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then(m => m.RegisterPage)
  },
  {
    path: 'dashboard',
    canActivate: [authGuard], loadComponent: () => import('./dashboard/dashboard.page').then(m => m.DashboardPage)
  },
  {
    path: 'children',
    canActivate: [authGuard], loadComponent: () => import('./pages/children/children.page').then(m => m.ChildrenPage)
  },
  {
    path: 'vaccines',
    canActivate: [authGuard], loadComponent: () => import('./pages/vaccines/vaccines.page').then(m => m.VaccinesPage)
  },
  {
    path: 'pending',
    canActivate: [authGuard], loadComponent: () => import('./pages/pending/pending.page').then(m => m.PendingPage)
  },
  {
    path: 'campaigns',
    canActivate: [authGuard], loadComponent: () => import('./pages/campaigns/campaigns.page').then(m => m.CampaignsPage)
  }
];
