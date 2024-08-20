import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { CustomerService } from '../service/customer.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private userservice:CustomerService,private router:Router) { }

  /**
   * Authguard can activate method
   */
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean {
    if(this.userservice.isLoggedIn()) {
      return true;
    }
    this.router.navigate([''])
    return false;
  }
}
