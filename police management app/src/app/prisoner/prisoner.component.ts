import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-prisoner',
  templateUrl: './prisoner.component.html',
  styleUrls: ['./prisoner.component.css']
})
export class PrisonerComponent implements OnInit {

  constructor(private http: Http) { }
  httpdata;
  deleteResponse;
   loadPrisoner() :void{
    this.http.get("http://localhost:3000/api/prisoner").map((response) => response.json()).
    subscribe((data) =>{this.httpdata=data.data;
    console.log(this.httpdata)});
  }

  ngOnInit() {
    this.loadPrisoner();
  }

  prData = {
    Enter_date:"",
    Release_date:"",
    year:"",
    prisoner_name:"",
    crime:"",

  }
  /** POST: add a new hero to the database */
  addPrisoner() {
    // alert("addPrisoner");
 
     this.http.post("http://localhost:3000/api/prisoner",this.prData).map((response) => response.json()).
     subscribe((data) =>{this.deleteResponse=data;
     this.loadPrisoner();
     }); 
}
}
