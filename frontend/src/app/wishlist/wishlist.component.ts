import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { CartitemService } from '../service/cartitem.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlist:Product[];
  constructor(private productService:ProductService,private router:Router,private cartService:CartitemService) { 
    this.wishlist = [];
  }

  ngOnInit(): void {
    this.wishlist = this.productService.getAllWishlist();
    console.log(this.wishlist)
  }

  delete(product:Product) {
    this.productService.removeFromWishlist(product);
    this.router.navigate(['wishlist']);
  }

  addToCart(product:Product) {
    this.cartService.addToCart(product);
    this.router.navigate(['/cart']);
  }

}
