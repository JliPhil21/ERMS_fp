import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { UserComponent } from './user/user/user.component';
import { SigninComponent } from './signin/signin/signin.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { SignupComponent } from './signup/signup/signup.component';


const appRoutes:Routes = [
  {
    path: 'signin', component: SigninComponent
  },
  {
    path: '', component: EmployeeComponent
  },
  {
    path: 'add-employee', component:AddEmployeeComponent
  },
  {
    path: 'edit/:id', component:EditEmployeeComponent
  },
  {
    path: 'add-user', component: AddUserComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'user', component: UserComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NavbarComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    UserComponent,
    SigninComponent,
    AddUserComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
