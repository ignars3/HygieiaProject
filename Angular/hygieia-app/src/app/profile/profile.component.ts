import { Component, OnInit } from '@angular/core';
import { TokenProviderService } from '../shared/services/token-provider.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private tokenProvider: TokenProviderService) { }

  ngOnInit(): void {
    var element = this.tokenProvider.getRole();
  }

}
