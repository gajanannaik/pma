import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-police-details',
  templateUrl: './police-details.component.html',
  styleUrls: ['./police-details.component.css']
})
export class PoliceDetailsComponent implements OnInit {

  constructor(private http: Http) { }
  httpdata;
  deleteResponse;
   loadPolice() :void{
    this.http.get("http://localhost:3000/api/police").map((response) => response.json()).
    subscribe((data) =>{this.httpdata=data.data;
    console.log(this.httpdata)});
  }

  ngOnInit() {
    this.loadPolice();
  }
  deletePolice(police_id){
    this.http.delete("http://localhost:3000/api/police/"+police_id).map((response) => response.json()).
    subscribe((data) =>{this.deleteResponse=data;
    this.loadPolice();
    });

}
poData= {
  police_name:"",
  Police_Address:"Nagawara",
  phone_number:"",
  compliant_no:"",
  FIR_No:"",

} 
/** POST: add a new hero to the database */
addPolice() {
  //alert("addPolice");

  this.http.post("http://localhost:3000/api/police",this.poData).map((response) => response.json()).
  subscribe((data) =>{this.deleteResponse=data;
  this.loadPolice();
  }); 
}
}
