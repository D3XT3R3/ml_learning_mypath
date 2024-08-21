import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, tap, switchMap } from "rxjs/operators";
import { CognitoClient } from "../infra.login/cognito.client";
import * as AuthActions from "../store.login/auth.actions";

@Injectable({
    providedIn: 'root'
    })
    export class AuthService {
        constructor(
            private store: Store, 
            private cognitoClient: CognitoClient
        ) {}

        login(username: string, password: string): void {
            this.store.dispatch(AuthActions.login({ username, password }));
            this.cognitoClient.signIn(username, password).pipe(
                tap(user => this.store.dispatch(AuthActions.loginSuccess({ user }))),
                catchError(error => {
                    this.store.dispatch(AuthActions.loginFailure({ error: error.message }));
                    return of(null);
                })
            ).subscribe();
        }


        logout(): void {
            this.store.dispatch(AuthActions.logout());
            this.getCurrentUser().pipe(
                switchMap(user => {
                    if (user && user.accessToken) {
                        return this.cognitoClient.signOut(user.accessToken);
                    }
                    return of(null);
                }),
                tap(() => this.store.dispatch(AuthActions.logoutSuccess())),
                catchError(error => {
                    console.error('logout error', error);
                    return of(null);
                })
            ).subscribe();
        }

        getCurrentUser(): Observable<any> {
            const accessToken = localStorage.getItem('accessToken');
            if (accessToken) {
                return this.cognitoClient.getCurrentUser(accessToken);
            } else {
                return of(null);
            }
        }
    }