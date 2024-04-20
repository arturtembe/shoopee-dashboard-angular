import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AddProductComponent } from './components/dashboard/product/add-product/add-product.component';
import { AddCategoriaComponent } from './components/dashboard/categoria/add-categoria/add-categoria.component';
import { ViewCategoriaComponent } from './components/dashboard/categoria/view-categoria/view-categoria.component';
import { EditCategoriaComponent } from './components/dashboard/categoria/edit-categoria/edit-categoria.component';
import { ViewProductComponent } from './components/dashboard/product/view-product/view-product.component';
import { EditProductComponent } from './components/dashboard/product/edit-product/edit-product.component';
import { ViewDashboardComponent } from './components/dashboard/view-dashboard/view-dashboard.component';
import { HeaderDashboardComponent } from './components/dashboard/header-dashboard/header-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ForgotPasswordComponent,
    AddProductComponent,
    AddCategoriaComponent,
    ViewCategoriaComponent,
    EditCategoriaComponent,
    ViewProductComponent,
    EditProductComponent,
    ViewDashboardComponent,
    HeaderDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }