import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {AppRoutingModule} from './app-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {AppComponent} from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {Page404Component} from './components/page404/page404.component';
import {HomeComponent} from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component
  ],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot({scrollPadding: true, scrollAssist: false, mode: 'md'}), // mode:'md'- style android style
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      //Progressive Web App
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],

})
export class AppModule {
}
