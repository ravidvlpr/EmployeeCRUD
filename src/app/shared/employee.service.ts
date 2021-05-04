import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { employee } from './Employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  buttonText:string="Submit";
  formdata:employee;
  listEmployee:employee[]=[];
  localItem:string;
  constructor() {
    this.localItem=localStorage.getItem("employee");
    if(this.localItem==null)
    {
       this.listEmployee=[];
    }
    else
    {
      this.listEmployee=JSON.parse( this.localItem);
    }
   }

  insertEmployee(emp:employee)
  {
    console.log(emp);
    if(emp.Id!=null && emp.Id!=0)
    {
      this.listEmployee.splice(this.listEmployee.indexOf(emp),1,emp);
      
    }
    else{
      emp.Id=this.listEmployee.length+1;
      this.listEmployee.push(emp);
      localStorage.setItem("employee",JSON.stringify( this.listEmployee));
      console.log('in save');
  
    }
  
  }
  getEmployee()
  {
    return this.listEmployee;
  }
  deleteEmployee(emp:employee)
  {
    const index=this.listEmployee.indexOf(emp);
    console.log(index);
    this.listEmployee.splice(index,1);
    localStorage.setItem("employee",JSON.stringify(this.listEmployee));
    this.getEmployee();
  }
  editGet(employee:employee)
  {
    this.buttonText="Update";
     this.formdata=Object.assign({},employee);
  }
}
