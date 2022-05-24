import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import jwt_decode from "jwt-decode";

export const TOKEN_KEY = 'token'
export const ROLE_HEY = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'

@Injectable({
  providedIn: 'root'
})
export class TokenProviderService {

  constructor(private jwtHelper: JwtHelperService) { }

  getRole(): string {
    var token = localStorage.getItem(TOKEN_KEY);

    if (token != null)
    {
      var tokenData: object = jwt_decode(token);
      type temp = keyof typeof tokenData;
      let myVar = ROLE_HEY as temp;      
      return tokenData[myVar];
    }

    return "Unauthorized";
  }
}
