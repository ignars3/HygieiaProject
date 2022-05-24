import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hygieia-app';

  private isNotify: boolean = false;

  constructor(private as: AuthService) { }
  
  public get isLoggedIn(): boolean {
    return this.as.isAuthenticated()
  }

  public get isNotification(): boolean {
    return this.isNotify;
  }

  logout() {
    this.as.logout()
  }

  changeColor(id: string) {
    var element = document.getElementById(id);

    if(id == "Notification")
    {
      if (element?.classList.contains('highlight-n'))
      {
        element?.classList.remove("highlight-n");
      }
      else
      {
        element?.classList.add("highlight-n");
      }
    }
    else
    {
      if (element?.classList.contains('highlight'))
      {
        element?.classList.remove("highlight");
      }
      else
      {
        element?.classList.add("highlight");
      }
    }
  }

  showNotification() {
    if (this.isNotify)
    {
      this.isNotify = false;
    }
    else
    {
      this.isNotify = true;
    }
  }
}
