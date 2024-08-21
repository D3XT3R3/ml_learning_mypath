// login.component.ts (Component Layer)
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../login.cognito/domain.login/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <form (ngSubmit)="onSubmit()">
      <input [(ngModel)]="username" name="username" placeholder="Username" required>
      <input [(ngModel)]="password" name="password" type="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
    <div *ngIf="(error$ | async) as error">{{ error }}</div>
  `
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error$: Observable<string>;

  constructor(private authService: AuthService, private store: Store<{ auth: { error: string } }>) {
    this.error$ = this.store.select(state => state.auth.error);
  }

  onSubmit() {
    this.authService.login(this.username, this.password);
  }
}