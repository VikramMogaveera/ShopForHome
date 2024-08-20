import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Search } from '../model/search';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  category_id:number = 0
  prod_search:any;
  name:any;
  constructor(private router:Router,private customerService:CustomerService) { }

  ngOnInit(): void {
  }

  /**
   * search a product based on search term
   */
  search(product:Search) {
    this.prod_search = product.searchname;
    console.log(this.prod_search);
    if(this.customerService.isLoggedIn()) {
      this.router.navigate(['products',this.prod_search]);
    }
    else {
      this.router.navigate(['home',this.prod_search]);
    }
  }

  isLoggedIn():boolean {
   return this.customerService.isLoggedIn();
  }
  /**
   * getting name stored in session storage
   */
  getName():string {
    this.name = sessionStorage.getItem('email');
    return this.name;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate([''])
  }
  category(data:any) {
    console.log(data);
    this.category_id = data;
  }
}
