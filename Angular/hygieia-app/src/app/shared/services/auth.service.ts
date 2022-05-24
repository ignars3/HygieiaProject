import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, tap } from 'rxjs';
import { TestClass } from '../models/test';
import { Token } from '../models/token';

export const TOKEN_KEY = 'token'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private testUrl: string = 'https://hygieiaweb.azurewebsites.net/api/home/test';
  private apiUrl: string = 'https://hygieiaweb.azurewebsites.net/api/home/login';
  private apiRegUrl: string = 'https://hygieiaweb.azurewebsites.net/api/home/register';

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) { }

  register(username: string, password: string, firstName: string, secondName: string, phone: string, adress: string) {
    return this.http.post<Token>(this.apiRegUrl, {username, password, firstName, secondName, phone, adress}).pipe(tap(token => {localStorage.setItem(TOKEN_KEY, token.access_token);}))
  }

  test(): Observable<TestClass> {
    return this.http.get<TestClass>(this.testUrl).pipe(tap(test => {console.log(test.text)}));
  }

  login(username: string, password: string): Observable<Token> {
    return this.http.post<Token>(this.apiUrl, {username, password}).pipe(tap(token => {localStorage.setItem(TOKEN_KEY, token.access_token);}))
  }

  isAuthenticated(): boolean {
    var token = localStorage.getItem(TOKEN_KEY);
    return (token != null) && !this.jwtHelper.isTokenExpired(token)
  }

  logout(isRedirect: boolean = true): void {
    localStorage.removeItem(TOKEN_KEY);

    if(isRedirect)
    {
      this.router.navigate(['']);
    }
  }
}
