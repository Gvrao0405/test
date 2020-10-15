import { SpaceXService } from './service/space-x.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
developerName: String = "Venkatesh Gadapa";
  Years = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022]
  dataFound:boolean = true;

  spaceXArry:any[] = [];
  constructor(private spacexService:SpaceXService) { }

  ngOnInit(): void {
this.spacexService.getAllDataBeforeInput().subscribe(data=>{
  this.spaceXArry = data;
  console.log(data)
});


  }
//get the records using Year filter
  getClick(id){
    this.spaceXArry = [];
    this.spacexService.getAllYearData(id).subscribe(data=>{
      debugger
      if(data.length > 0){
        this.spaceXArry = data;
      console.log(data)
      }
      else{
        this.dataFound =false;
        alert('No data found with this year.Please choose another Year.Thank You')
      }
      
    })
  }

  getTrue(val){
    this.spaceXArry = [];
    this.spacexService.getAllLaunchData(val).subscribe(data=>{
      this.spaceXArry = data;
    })
  }
}
