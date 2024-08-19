import { createReducer } from "@ngrx/store";
import * as AuthActions from "./auth.actions";
import { on } from "@ngrx/store";


// Typescript Interface -- Properties of auth state
export interface AuthState {
  user: any | null;
  error: any | null;
  loading: boolean;
}

export const initialState: AuthState = {
    user: null,
    error: null,
    loading: false,
};

// Reducer

export const authReducer = createReducer(
    initialState,
    on(AuthActions.login, state => ({ ...state, loading: true })),
    on(AuthActions.loginSuccess, (state, { user }) => ({ ...state, user, error: null, loading: false })),
    on(AuthActions.loginFailure, (state, { error }) => ({ ...state, error, loading: false })),
    on(AuthActions.logout, state => ({ ...state, loading: true })),
  on(AuthActions.logoutSuccess, state => ({ ...state, user: null, loading: false }))
);




