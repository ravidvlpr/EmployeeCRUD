import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { employee } from 'src/app/shared/Employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  firstName:any;
  totalRedord:Number;
  page:Number=1;
  employees:employee[];
  constructor(private employeeService:EmployeeService,private toastr:ToastrService) { }

  ngOnInit(): void {
   this.employees= this.employeeService.getEmployee();
   this.totalRedord=this.employees.length;
  }
  onDelete(employee:employee)
  {
    if(confirm('Are you sure to delete this record?'))
    {
      this.employeeService.deleteEmployee(employee);   
      this.toastr.warning('Delete successfully','EMP register');
    }

  }
  popup(employee:employee)
  {
    this.employeeService.editGet(employee);
  }
  Search(){
    if(this.firstName=="")
    {
      this.ngOnInit();
    }
    else
    {
      this.employees=this.employees.filter(res=>{
        return res.FullName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      })
    }
  }
  sort(key)
  {

  }
}
