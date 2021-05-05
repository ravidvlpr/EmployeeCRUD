import { Component, OnInit } from '@angular/core';
import { FetchdataService } from 'src/app/shared/fetchdata.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent implements OnInit {
  employees: Array<any>;
  totalRec : number;
  page: number = 1;

  constructor(private randomuser:FetchdataService) { }

  ngOnInit(): void {
    this.randomuser.getData().subscribe((data)=>{
      this.employees=data.results;
      this.totalRec=this.employees.length;
      console.log(this.employees);
    });
  }

}
