import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddProductComponent } from './components/add-product/add-product.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'edit-product/:id', component: AddProductComponent },
  { path: '**', redirectTo: '' }, // Redirect to home for any unknown routes
];
