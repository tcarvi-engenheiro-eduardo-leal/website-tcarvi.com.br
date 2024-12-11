import { Routes } from '@angular/router';
import { Layout1Component } from './layout-1/layout-1.component';

export const routes: Routes = [
  { path: '', component: Layout1Component }, // Rota para a página inicial
  { path: '**', component: Layout1Component }, // Rota para páginas não encontradas
];
