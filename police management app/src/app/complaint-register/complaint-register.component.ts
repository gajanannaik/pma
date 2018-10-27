import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'complaint-register',
  templateUrl: './complaint-register.component.html',
  styleUrls: ['./complaint-register.component.css']
})
export class ComplaintRegisterComponent implements OnInit {
  constructor(private http: Http) { }
  httpdata;
  deleteResponse;
   loadComplaints() :void{
    this.http.get("http://localhost:3000/api/complaint").map((response) => response.json()).
    subscribe((data) =>{this.httpdata=data.data[0];
    console.log(this.httpdata)});
  }
  ngOnInit() {
    this.loadComplaints();
  }

  deleteComplaint(complaint_num){
    this.http.delete("http://localhost:3000/api/complaint/"+complaint_num).map((response) => response.json()).
    subscribe((data) =>{this.deleteResponse=data;
    this.loadComplaints();
    });

     
  }
    cData= {
    complaint_type:"",
Accuse_name:"",
Location:"Nagavara",
Date:"",
Time:"",
complaint_description:"",
  } 
  /** POST: add a new hero to the database */
  addComplaint() {
   // alert("addComplaint");

    this.http.post("http://localhost:3000/api/complaint",this.cData).map((response) => response.json()).
    subscribe((data) =>{this.deleteResponse=data;
    this.loadComplaints();
    }); 
  }



   
}