import { Component, OnInit } from '@angular/core';
import {   Router } from '@angular/router';

@Component({
  selector: 'app-login-module',
  templateUrl: './login-module.component.html',
  styleUrls: ['./login-module.component.css']
})
export class LoginModuleComponent implements OnInit {
  username;
  password;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  login(){
   
    if(this.username=="admin" && this.password=="admin")
    {
    this.router.navigate(['/complaint']);
    sessionStorage.setItem("pma_login",'true');
    }else{
      alert("Invalid User Credentials");
    }
  }

}
