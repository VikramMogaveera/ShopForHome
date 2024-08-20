import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  prod_name:any;
  title = 'shopforhome';

  prod_find(product: any) {
    this.prod_name = product;
  }
}
