import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-fir',
  templateUrl: './fir.component.html',
  styleUrls: ['./fir.component.css']
})
export class FIRComponent implements OnInit {

  constructor(private http: Http) { }
  httpdata;
  deleteResponse;
   loadFir() :void{
    this.http.get("http://localhost:3000/api/fir").map((response) => response.json()).
    subscribe((data) =>{this.httpdata=data.data;
    console.log(this.httpdata)});
  }
  ngOnInit() {
    this.loadFir();
  }
  deleteFir(Fir_no){
    this.http.delete("http://localhost:3000/api/fir/"+Fir_no).map((response) => response.json()).
    subscribe((data) =>{this.deleteResponse=data;
    this.loadFir();
    });

}
fData= {
  Fir_no :"",
 Date:"",
 Time :"",
 chargesheet_no:"",

}
/** POST: add a new hero to the database */
addFir() {
  // alert("addFir");

   this.http.post("http://localhost:3000/api/fir",this.fData).map((response) => response.json()).
   subscribe((data) =>{this.deleteResponse=data;
   this.loadFir();
   }); 
}
}