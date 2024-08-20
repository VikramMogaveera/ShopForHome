import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/userLogin';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  customer:UserLogin;
  isError:boolean = false;
  constructor(private cs:CustomerService,private router:Router) { 
    this.customer ={'customer_email':'', "customer_password":''};
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.customer);
    this.cs.checkLogin(this.customer).subscribe(
      data=>{
        if(data) {
          sessionStorage.setItem('email',this.customer.customer_email);
          this.router.navigate(['products']);
        }
        else {
          this.isError = true;
          this.router.navigate(['login']);
        }
      }
    )
   
  }
}
