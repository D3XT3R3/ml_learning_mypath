import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.cognito/login/login.component';
import { AuthService } from './login.cognito/domain.login/auth.service';
import { CognitoClient } from './login.cognito/infra.login/cognito.client';
import { authReducer } from './login.cognito/store.login/auth.reducer';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    AppComponent,
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ auth: authReducer })
  ],
  providers: [AuthService, CognitoClient],
  bootstrap: []
})
export class AppModule { }