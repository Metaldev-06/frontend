import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';

import { es_ES, provideNzI18n } from 'ng-zorro-antd/i18n';

registerLocaleData(es);
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions(), withComponentInputBinding()),
    provideNzI18n(es_ES),
    importProvidersFrom(FormsModule, HttpClientModule),
    provideAnimations(),
  ],
};
