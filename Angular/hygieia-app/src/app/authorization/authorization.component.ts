import { Component, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  constructor(private as: AuthService, private renderer: Renderer2) 
  { }

  public errorMessage: string = '';
  public messageText: string = 'Don`t have an accout?';
  public authText: string = 'Sign up';
  public authNotText: string = 'Log in';
  public headerText: string = 'Login';

  public get isLoggedIn(): boolean {
    return this.as.isAuthenticated()
  }

  public get isLogin(): boolean {
    if (this.messageText == 'Don`t have an accout?')
    {
      return true;
    }

    return false;
  }
  register(username: string, password: string) {
    let element = document.getElementById('mat-input-2');
    let firstName: string = element ? element.nodeValue ? element.nodeValue: '': '';

    element = document.getElementById('mat-input-3');
    let secondName: string = element ? element.nodeValue ? element.nodeValue: '': '';

    element = document.getElementById('mat-input-4');
    let phone: string = element ? element.nodeValue ? element.nodeValue: '': '';

    element = document.getElementById('mat-input-5');
    let adress: string = element ? element.nodeValue ? element.nodeValue: '': '';

    this.as.register(username, password, firstName, secondName, phone, adress).subscribe(res => {
    }, error => {
      this.errorMessage = 'User with this email already exists';
    })
  }

  login(username: string, password: string) {
    this.as.login(username, password).subscribe(res => {
      }, error => {
        this.errorMessage = 'Wrong username or password';
      })
  }

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'mat-typography');
    if (this.isLoggedIn)
    {
      this.as.logout(false);
    }
  }

  changeLogin(): void {
    if (this.isLogin)
    {
      this.messageText = 'Already have an account?'
      this.authText = 'Log in';
      this.headerText = 'Signup';
      this.authNotText = 'Sign up'
    }
    else
    {
      this.messageText = 'Don`t have an accout?';
      this.authText = 'Sign up';
      this.headerText = 'Login';

      this.authNotText = 'Log in'
    }
  }
}
