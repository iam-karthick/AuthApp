import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
 
 
  constructor(private auth:AuthService,public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if( this.auth.LoggedInAuthenticate()){
      return true
    } else {
      this.router.navigate(['/']);
      return false
    }
  }   
}
