import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { AuthguardService } from './guards/authguard.service';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'home/:searchTerm',component:HomepageComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'products/:searchTerm',component:ProductComponent,canActivate:[AuthguardService]},
  {path:'products',component:ProductComponent,canActivate:[AuthguardService]},
  {path:'cart/:id',component:CartComponent,canActivate:[AuthguardService]},
  {path:'cart',component:CartComponent,canActivate:[AuthguardService]},
  {path:'wishlist',component:WishlistComponent,canActivate:[AuthguardService]},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
