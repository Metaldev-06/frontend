import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/home/home.routes').then((c) => c.homeRoutes),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./pages/products/products.routes').then(
            (c) => c.produtsRoutes,
          ),
      },
    ],
  },
];
