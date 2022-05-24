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
    new NotifyModel("Hello", "Here there are some text for you"),
    new NotifyModel("Hello", "Here there are some text for you"), 
    new NotifyModel("Hello", "Here there are some text for you", false),
    new NotifyModel("Hello", "Here there are some text for you", false),
    new NotifyModel("Hello", "Here there are some text for you", false)
  ];
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //this.http.get<NotifyModel[]>(this.apiUrl).pipe(tap(result => {console.log(result); this.notifications = result}));
  }

}
