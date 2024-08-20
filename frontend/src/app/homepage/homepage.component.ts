import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from '../model/cartitem';
import { Customer } from '../model/customer';
import { Product } from '../model/product';
import { CustomerService } from '../service/customer.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  searchTerm:string = '';
  name:any;
  products:Product[];
  customer:Customer;
  sortByParams = '';
  sortDirection = 'asc';
  constructor(private ps:ProductService,private route:ActivatedRoute,private router:Router,private us:CustomerService) { 
    this.products = [];
    this.customer = {"customer_email":'',"customer_name":'',"age":0,"gender":'',"mob_no":'',"customer_password":''};
  }


  images = ['../../assets/images/Furniture1.jpg','../../assets/images/furniture4.jpg','../../assets/images/furniture3.jpg']
  ngOnInit(): void {

    this.route.paramMap.subscribe((param)=>{
      let searchWord:string = <string>param.get('searchTerm');
      this.searchTerm = searchWord;
    });
    
    /**
     * Getting all the products and store in an array
     */
    this.ps.getAllProducts()
      .subscribe(prodArray =>
        prodArray.forEach(
          product => this.products.push(product)
        ));
    console.log(this.products)
  }
  
  /**
   * sorting products ascending or descending
   */
  onSortDirection() {
    if(this.sortDirection === 'desc') {
      this.sortDirection = 'asc';
    }
    else {
      this.sortDirection = 'desc';
    }
  }
}
