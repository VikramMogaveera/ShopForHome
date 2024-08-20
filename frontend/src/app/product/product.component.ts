import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { CartitemService } from '../service/cartitem.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  searchTerm:string = '';
  products:Product[];
  sortByParams = '';
  sortDirection = 'asc';
  constructor(private ps:ProductService,private route:ActivatedRoute,private router:Router,private cart:CartitemService) { 
    this.products = [];
  }
  images = ['../../assets/images/Furniture1.jpg','../../assets/images/furniture4.jpg','../../assets/images/furniture3.jpg']
  ngOnInit(): void {

    this.route.paramMap.subscribe((param)=>{
      let searchWord:string = <string>param.get('searchTerm');
      this.searchTerm = searchWord;
    });

    this.ps.getAllProducts()
      .subscribe(prodArray =>
        prodArray.forEach(
          product => this.products.push(product)
        ));
    console.log(this.products)
  }

  addcart(product:Product) {
    this.cart.addToCart(product);
    this.router.navigate(['/cart']);
  }
  onSortDirection() {
    if(this.sortDirection === 'desc') {
      this.sortDirection = 'asc';
    }
    else {
      this.sortDirection = 'desc';
    }
  }

  wishlist(product:Product) {
    this.ps.addToWishlist(product);
    this.router.navigate(['wishlist']);
  }
}
