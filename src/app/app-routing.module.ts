import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { FetchDataComponent } from './FetchData/fetch-data/fetch-data.component';
import { HomeComponent } from './Home/home/home.component';
import { LoginComponent } from './Login/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'fetch-data', component:FetchDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
