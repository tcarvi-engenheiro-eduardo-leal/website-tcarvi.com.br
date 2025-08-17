import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideMarkdown } from 'ngx-markdown';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(), // Necessário se for carregar arquivos .md externos
    provideMarkdown(),   // Configuração básica do ngx-markdown
  ]
};
