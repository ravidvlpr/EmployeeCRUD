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
    if(form.value.Id==null)
    {
      this.resetForm();
      this.toastr.success('Inserted successfully',"EMP. Register");
    }
    else
    {
      this.resetForm();
      this.toastr.warning('Update successfully',"EMP. Register");
    }
    
  }

}
