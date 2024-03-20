import {
  ApplicationConfig,
  LOCALE_ID,
  importProvidersFrom,
} from '@angular/core';
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

import localeEsAR from '@angular/common/locales/es-AR';

registerLocaleData(localeEsAR);
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions(), withComponentInputBinding()),
    importProvidersFrom(FormsModule, HttpClientModule),
    provideAnimations(),
    {
      provide: LOCALE_ID,
      useValue: 'es-AR',
    },
  ],
};
