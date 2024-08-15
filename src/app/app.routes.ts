import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  {path:'',redirectTo:'product', pathMatch:'full'},
  {path:'product',component:ProductsComponent,title:"Products"},
  {path:'login',component:LoginComponent,title:"Login"},
  {path:'signup',component:SignupComponent,title:"Signup"},
  {path:'**',component:NotfoundComponent,title:"Not Found"},
];
