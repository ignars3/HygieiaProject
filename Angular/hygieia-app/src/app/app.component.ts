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

  login(username: string, password: string) {
    this.as.login(username, password).subscribe(res => {
      }, error => {
        alert('Wrong login or password' + error)
      })
  }

  logout() {
    this.as.logout()
  }
}
