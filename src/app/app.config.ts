import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { authGuard } from './component/service/auth.guard';
import { CommonModule } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [BrowserModule, ReactiveFormsModule, CommonModule, FormsModule, provideHttpClient(), provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
