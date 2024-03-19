import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then((c) => c.dashboardRoutes),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
