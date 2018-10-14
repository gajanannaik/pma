import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'complaint-register',
  templateUrl: './complaint-register.component.html',
  styleUrls: ['./complaint-register.component.css']
})
export class ComplaintRegisterComponent implements OnInit {
  constructor(private http: Http) { }
  httpdata;
  ngOnInit() {
    this.http.get("http://localhost:3000/api/complaint").map((response) => response.json()).
      subscribe((data) =>{this.httpdata=data.data;
      console.log(this.httpdata)});
  }
   
}