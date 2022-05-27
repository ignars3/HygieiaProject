import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  constructor(private as: AuthService, private renderer: Renderer2, private router: Router) 
  { 
  }

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

  public get isVerify(): boolean {
    if (this.headerText == 'Verification')
    {
      return true;
    }

    return false;
  }

  verification() {
    this.headerText = "Verification";

  }

  applyRegister() {
    this.loginParam("ignars3", "hello12345")
  }

  register() {

    let element = document.getElementById('mat-input-2');
    let firstName: string = element ? element.nodeValue ? element.nodeValue: '': '';

    element = document.getElementById('mat-input-3');
    let secondName: string = element ? element.nodeValue ? element.nodeValue: '': '';

    element = document.getElementById('mat-input-4');
    let thirdName: string = element ? element.nodeValue ? element.nodeValue: '': '';

    element = document.getElementById('mat-input-5');
    let phone: string = element ? element.nodeValue ? element.nodeValue: '': '';

    element = document.getElementById('mat-input-6');
    let adress: string = element ? element.nodeValue ? element.nodeValue: '': '';

    this.as.register((<HTMLInputElement>document.getElementById("mat-input-0")).value, (<HTMLInputElement>document.getElementById("mat-input-1")).value, firstName, secondName, phone, adress).subscribe(res => {
      this.verification();
    }, error => {
      this.verification()
      //this.errorMessage = 'User with this email already exists';
    })
  }

  login() {
    console.log((<HTMLInputElement>document.getElementById("mat-input-0")).value);
    console.log((<HTMLInputElement>document.getElementById("mat-input-1")).value);
    this.as.login((<HTMLInputElement>document.getElementById("mat-input-0")).value, (<HTMLInputElement>document.getElementById("mat-input-1")).value).subscribe(res => {
      this.router.navigate(['']);
      }, error => {
        this.errorMessage = 'Wrong username or password';
      })
  }

  loginParam(username: string, password: string) {
    this.as.login(username, password).subscribe(res => {
      this.router.navigate(['']);
      }, error => {
        //this.errorMessage = 'Wrong username or password';
      })
  }

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'mat-typography');
    if (this.isLoggedIn)
    {
      this.as.logout(false);
    }
    this.removeHeader()
  }

  removeHeader(): void {
    let element = document.getElementById('wp-block-library-css');
    element != null ? document.getElementsByTagName('head')[0].removeChild(element) : element = null;

    element = document.getElementById('definity_main-css');
    element != null ? document.getElementsByTagName('head')[0].removeChild(element) : element = null;

    element = document.getElementById('bootstrap-css');
    element != null ? document.getElementsByTagName('head')[0].removeChild(element) : element = null;
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

    this.errorMessage = "";
  }
}
