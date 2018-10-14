import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-charge-sheet',
  templateUrl: './charge-sheet.component.html',
  styleUrls: ['./charge-sheet.component.css']
})
export class ChargeSheetComponent implements OnInit {

  constructor(private http: Http) { }
  httpdata;
  ngOnInit() {
    this.http.get("http://localhost:3000/api/chargesheet").map((response) => response.json()).
      subscribe((data) => console.log(data))
  }
}  