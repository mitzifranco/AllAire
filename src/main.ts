/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import "./polyfills";
import { enableProdMode } from "@angular/core";

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

enableProdMode();
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
