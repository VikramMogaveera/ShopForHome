import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';
import { UserLogin } from '../model/userLogin';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  login:string ="http://localhost:8001/"
  admin:string = "http://localhost:8000/";
  findCustomer:string = "http://localhost:8001/email"
  constructor(private http:HttpClient) { }

  doRegister(customer:Customer) {
    return this.http.post<Customer>(this.login + 'user', customer);
  }

  checkLogin(customer:UserLogin){
    return this.http.post<boolean>(this.login+'login',customer);
  }

  getByEmail(email:string):Observable<Customer> {
    return this.http.get<Customer>(`${this.findCustomer}/${email}`)
  }
  isLoggedIn() {
    return !!sessionStorage.getItem('email');
  }
  
}
