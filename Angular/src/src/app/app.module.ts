import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ShowproductComponent } from './showproduct/showproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ShowcartComponent } from './showcart/showcart.component';
import { PrintinvoiceComponent } from './printinvoice/printinvoice.component';

@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    ShowproductComponent,
    UpdateproductComponent,
    ProductdetailsComponent,
    ShowcartComponent,
    PrintinvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
