import { Routes } from '@angular/router';
import { Layout1Component } from './layout-1/layout-1.component';
import { Layout2Component } from './layout-2/layout-2.component';
import { Layout3Component } from './layout-3/layout-3.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'l1' },
  { path: 'l1', component: Layout1Component },
  { path: 'l2', component: Layout2Component },
  { path: 'l3', component: Layout3Component }
];
