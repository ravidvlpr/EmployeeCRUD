import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { EmployeeService } from '../../shared/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService:EmployeeService, private toastr : ToastrService) { 
   
  }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?:NgForm)
  {
    if (form != null)
    {
      form.resetForm();
    }
    
    this.employeeService.formdata={
      Id:0,
      FullName:'',
      PhoneNumber:'',
      PinNumber:''
    }
  }
  onSubmit(form:NgForm)
  {
    this.employeeService.insertEmployee(form.value);
    this.toastr.success('Inserted successfully',"EMP. Register");
  }

}