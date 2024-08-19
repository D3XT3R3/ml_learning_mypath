import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
    CognitoIdentityProviderClient, 
    InitiateAuthCommand,
    SignUpCommand,
    GlobalSignOutCommand,
    InitiateAuthCommandOutput,
    SignUpCommandOutput,
    GlobalSignOutCommandOutput
    } from "@aws-sdk/client-cognito-identity-provider";
    import { environment } from "../../environments/environments";


    //TOOD: Add logic for Login logic for Cognito