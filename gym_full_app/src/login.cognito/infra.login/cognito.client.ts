import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";
import { map } from "rxjs/operators";
import {
    CognitoIdentityProviderClient, 
    InitiateAuthCommand,
    GlobalSignOutCommand,
    InitiateAuthCommandOutput,
    GetUserCommand,
    GlobalSignOutCommandOutput,
    } from "@aws-sdk/client-cognito-identity-provider";
    import { environment } from "../../environments/environments";


@Injectable({
    providedIn: 'root'
  })
  export class CognitoClient {
    private client: CognitoIdentityProviderClient;
  
    constructor() {
      this.client = new CognitoIdentityProviderClient({ 
        region: environment.region 
      });
    }
  
    signIn(username: string, password: string): Observable<InitiateAuthCommandOutput> {
      const command = new InitiateAuthCommand({
        AuthFlow: "USER_PASSWORD_AUTH",
        ClientId: environment.cognitoAppClientId,
        AuthParameters: {
          USERNAME: username,
          PASSWORD: password
        }
      });
  
      return from(this.client.send(command));
    }
  
   /* signUp(username: string, password: string, email: string): Observable<boolean> {
      const command = new SignUpCommand({
        ClientId: environment.cognitoAppClientId,
        Username: username,
        Password: password,
        UserAttributes: [
          {
            Name: "email",
            Value: email
          }
        ]
      });
  
      return from(this.client.send(command)).pipe(
        map((result: SignUpCommandOutput) => !!result.UserSub)
      );
    }
  */

    signOut(accessToken: string): Observable<GlobalSignOutCommandOutput> {
      const command = new GlobalSignOutCommand({
        AccessToken: accessToken
      });
      return from(this.client.send(command));
    }

    getCurrentUser(accessToken: string): Observable<any> {
        const command = new GetUserCommand({
            AccessToken: accessToken
        });
        return from(this.client.send(command));
   }
}


  