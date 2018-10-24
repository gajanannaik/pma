import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-victim-details',
  templateUrl: './victim-details.component.html',
  styleUrls: ['./victim-details.component.css']
})
export class VictimDetailsComponent implements OnInit {

  constructor(private http: Http) { }
  httpdata;
  deleteResponse;
  loadVictim() :void{
    this.http.get("http://localhost:3000/api/victim").map((response) => response.json()).
    subscribe((data) =>{this.httpdata=data.data;
    console.log(this.httpdata)});
  }
  ngOnInit() {

    this.loadVictim();
  }
  deleteVictim(Victim_id){
    this.http.delete("http://localhost:3000/api/victim/"+Victim_id).map((response) => response.json()).
    subscribe((data) =>{this.deleteResponse=data;
    this.loadVictim();
    });

  }
  vData= {
    Name:"",
    Address:"",
    Phone_Number:"",
    Gender:"",
    complaint_no:"",

  } 
  addVictim(){
    //alert("addVictim");

    this.http.post("http://localhost:3000/api/victim",this.vData).map((response) => response.json()).
    subscribe((data) =>{this.deleteResponse=data;
    this.loadVictim();
    }); 
  }
}
