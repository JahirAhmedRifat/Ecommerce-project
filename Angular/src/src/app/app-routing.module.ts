import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowproductComponent } from './showproduct/showproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ShowcartComponent } from './showcart/showcart.component';
import { PrintinvoiceComponent } from './printinvoice/printinvoice.component';

const routes: Routes = [
  {path:'', component:ShowproductComponent},
  {path:'showallstudents',component:ShowproductComponent},
  {path:'savestudent',component:AddproductComponent},
  {path:'details/:id',component:ProductdetailsComponent},
  {path:'updatestudent',component:UpdateproductComponent},
  {path:'showcart',component:ShowcartComponent},
  {path:'printinvoice',component:PrintinvoiceComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
