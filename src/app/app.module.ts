import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserService } from './services/user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctionsModule, FUNCTIONS_ORIGIN } from '@angular/fire/functions';
import { LoginComponent } from './components/login/login.component';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    AngularFireAuthGuardModule,
  ],
  providers: [
    UserService,
    AngularFirestore,

    // { provide: FUNCTIONS_ORIGIN, useValue: 'http://localhost:5000' }
  ],
  exports: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
