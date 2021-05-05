import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { login } from 'src/app/shared/login.model';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  angular: any;
  loginUser:login[]=[];
  constructor(public loginService:LoginService,private rout:Router) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(){
    this.loginService.formData={
        id:0,
        user:'',
        password:''

    }
  }
  onSubmit(form:NgForm)
  {
    this.loginService.getUsers().subscribe((response)=>{
      this.loginUser=response; 
      this.rout.navigate(['/home'])
      // this.angular.forEach(this.loginUser, function(value, key) {
        // if(value.user==form.value.user && value.password==form.value.password)
        // {
        //   console.log('pass');
        // }
        // });
    })
  
  }

}
