import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'header', pathMatch: 'full' }, {
    path: '',
    loadChildren: () => import('./module/layout/admin-layout/admin.routing').then(m => m.layoutAdminRoutes)
  }
];
