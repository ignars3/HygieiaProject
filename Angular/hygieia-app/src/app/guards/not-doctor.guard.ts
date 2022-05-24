import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenProviderService } from '../shared/services/token-provider.service';

@Injectable({
  providedIn: 'root'
})
export class NotDoctorGuard implements CanActivate {
  
  constructor(private tokenProvider: TokenProviderService,  private router: Router) { }

  canActivate(): boolean {
    if(this.tokenProvider.getRole() == "Doctor") {
      this.router.navigate([''])
    }
    
    return true;
  }
  
}
