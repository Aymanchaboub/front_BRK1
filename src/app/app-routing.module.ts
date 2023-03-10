
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AuthGuard } from './_services/auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateCategoryComponent } from './componement/create-category/create-category.component';
import { SousCategoryCreateComponent } from './componement/sous-category-create/sous-category-create.component';
import { CategorieListComponent } from './componement/categorie-list/categorie-list.component';
import { CategoryEditComponent } from './componement/category-edit/category-edit.component';





const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'contact',component:ContactComponent},
  {path:'home',component:HomeComponent},
  {path:'shop',component:ShopComponent},
  {path:'checkout',component:CheckoutComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  {path:'edit',component:CategoryEditComponent},



  { path: 'admin', component: BoardAdminComponent  },
  {path:'add',component:CreateCategoryComponent},
  {path:'add1',component:SousCategoryCreateComponent},
  {path:'all',component:CategorieListComponent},



  {path:'cart',component:CartComponent}
];

@NgModule({


  imports: [RouterModule.forRoot(routes),ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
