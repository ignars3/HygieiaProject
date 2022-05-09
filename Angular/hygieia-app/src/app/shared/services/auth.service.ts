import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, tap } from 'rxjs';
import { Token } from '../models/token';

export const TOKEN_KEY = 'token'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = 'https://localhost:5001/api/Home/login';

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) { }

  login(username: string, password: string): Observable<Token> {
    return this.http.post<Token>(this.apiUrl, {username, password}).pipe(tap(token => {localStorage.setItem(TOKEN_KEY, token.access_token);}))
  }

  isAuthenticated(): boolean {
    var token = localStorage.getItem(TOKEN_KEY);
    return (token != null) && !this.jwtHelper.isTokenExpired(token)
  }

  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
    this.router.navigate(['']);
  }
}
