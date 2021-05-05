import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'
import { Ng2OrderModule } from 'ng2-order-pipe'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './Employees/employee/employee.component';
import { EmployeeListComponent } from './Employees/employee-list/employee-list.component';
import { LoginComponent } from './Login/login/login.component';
import { NavMenuComponent } from './nav-menu/nav-menu/nav-menu.component';
import { HomeComponent } from './Home/home/home.component';
import { FetchDataComponent } from './FetchData/fetch-data/fetch-data.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    LoginComponent,
    NavMenuComponent,
    HomeComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2OrderModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
    // ,
    // Ng2SearchPipe

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
