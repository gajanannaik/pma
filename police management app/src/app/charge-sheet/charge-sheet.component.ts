import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-charge-sheet',
  templateUrl: './charge-sheet.component.html',
  styleUrls: ['./charge-sheet.component.css']
})
export class ChargeSheetComponent implements OnInit {

  constructor(private http: Http) { }
  httpdata;
  deleteResponse;

  loadChargesheet() :void{
    this.http.get("http://localhost:3000/api/chargesheet").map((response) => response.json()).
    subscribe((data) =>{this.httpdata=data.data;
    console.log(this.httpdata)});
  }
  ngOnInit() {
   this.loadChargesheet();
  }
  
  deleteChargesheet(charge_sheet_no){
    this.http.delete("http://localhost:3000/api/chargesheet/"+charge_sheet_no).map((response) => response.json()).
    subscribe((data) =>{this.deleteResponse=data;
    this.loadChargesheet();
    });
  }
  cData= {
charge_sheet_no:"",
chargesheet_date:"",
Time:"",
Name:"",
crime:"",
  } 
  /** POST: add a new hero to the database */
  addChargesheet() {
    alert("addChargesheet");

    this.http.post("http://localhost:3000/api/chargesheet",this.cData).map((response) => response.json()).
    subscribe((data) =>{this.deleteResponse=data;
    this.loadChargesheet();
    }); 
}  
}