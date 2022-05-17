import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hygieia-app';

  constructor(private as: AuthService) { }
  
  public get isLoggedIn(): boolean {
    return this.as.isAuthenticated()
  }

  logout() {
    this.as.logout()
  }
}
