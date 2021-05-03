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
    if(this.buttonText=="Update")
    {
      const index=this.listEmployee.indexOf(emp);
      this.listEmployee[index].FullName=emp.FullName;
      this.listEmployee[index].PhoneNumber=emp.PhoneNumber;
      this.listEmployee[index].PinNumber=emp.PinNumber;
      return this.formdata;
    }
    else{
      emp.Id=Math.floor(Math.random() * (100 - 1 + 1)) + 1;
      this.listEmployee.push(emp);
      localStorage.setItem("employee",JSON.stringify( this.listEmployee));
      console.log('in save');
      return this.formdata;
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
  }
  editGet(employee:employee)
  {
    this.buttonText="Update";
     this.formdata=employee;
  }
}
