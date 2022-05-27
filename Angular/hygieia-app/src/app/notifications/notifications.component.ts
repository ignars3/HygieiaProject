import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { NotifyModel } from '../shared/models/notification';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})

export class NotificationsComponent implements OnInit {
  private apiUrl: string = 'https://hygieiaweb.azurewebsites.net/api/notification/getall';

  public notifications: NotifyModel[] = [
    new NotifyModel("Your patient sheduled a meeting", "Your patient Natalia Vershava sheduled a meeting with a neuro doctor John Wersted. The meeting will take place on 06/11/2022"),
    new NotifyModel("Someone tries to reach you out", "You have a new message from Ben Karter. Answer as fast as possible"), 
    new NotifyModel("New family doctor form", "Someone applied a new family doctor request form with your name. You can view it in your profile", false),
    new NotifyModel("Someone tries to reach you out", "You have a new message from Ned Geret. Answer as fast as possible", false),
    new NotifyModel("Your patient sheduled a meeting", "Your patient Max Verneckevich sheduled a meeting with a allergist doctor Ned Geret. The meeting will take place on 06/20/2022", false),
    new NotifyModel("Your patient sheduled a meeting", "Your patient Vanesa Harts sheduled a meeting with a doctor Chrome Tren. The meeting will take place on 05/30/2022", false),
    new NotifyModel("Your patient sheduled a meeting", "Your patient Natalia Vershava sheduled a meeting with a neuro doctor John Wersted. The meeting will take place on 06/11/2022", false),
    new NotifyModel("Your patient sheduled a meeting", "Your patient Natalia Vershava sheduled a meeting with a neuro doctor John Wersted. The meeting will take place on 06/11/2022", false)
  ];
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //this.http.get<NotifyModel[]>(this.apiUrl).pipe(tap(result => {console.log(result); this.notifications = result}));
  }

}
