import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../model/customer';
import { Message } from '../model/messages';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customer:Customer;
  message:any;
  isError:boolean = false;
  constructor(private us:CustomerService,private router:Router) { 
    this.customer = {"customer_email":'',"customer_name":'',"age":0,"gender":'',"mob_no":'',"customer_password":''};
  }

  ngOnInit(): void {
  }

  register() {
    console.log(this.customer);
    this.us.doRegister(this.customer)
    .subscribe(data=>{
      if(data){
        alert("registered Successfully,please login")
        this.router.navigate(['login'])
      }
      else {
        this.isError = true;
        this.router.navigate(['register'])
      }
    });
  }
}
