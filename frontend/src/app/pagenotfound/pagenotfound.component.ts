import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  constructor(private userservice:CustomerService) { }

  ngOnInit(): void {
  }

  isLoggedIn():boolean {
    return this.userservice.isLoggedIn();
  }
}
