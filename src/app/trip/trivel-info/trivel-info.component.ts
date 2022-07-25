import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { AssetdataService } from 'src/app/services/assetdata.service';
import { filter, map } from 'rxjs';


@Component({
  selector: 'app-trivel-info ',
  templateUrl: './trivel-info.component.html',
   styleUrls: ['./trivel-info.component.scss'],
  
})
export class TrivelInfoComponent implements OnInit {
  flightstatus:any=[]
  cancelflightfil:any=[]
  completestatus:any;
  cancelled:any;
  upcoming:any;
  constructor(private _formBuilder: FormBuilder, private dataa:AssetdataService) { }

  ngOnInit(): void {  
 this.dataa.myflightsdata().subscribe((Response: any) => {
      this.flightstatus = Response?.travelInfo
     console.log(this.flightstatus)
     this.Completedflight();
    this.Cancelflight();
    this.upcomingflight();
    },
    (error)=> {
      console.log(error)
    })
}

Completedflight(){
    
  this.completestatus= this.flightstatus.filter((trip:any)=>{
    return trip.status=="completed";
  })       
  console.log("my completed data",this.completestatus)
}

Cancelflight(){
    
  this.cancelled= this.flightstatus.filter((trip:any)=>{
    return trip.status=="cancelled";
  })       
  console.log("my cancelled data",this.cancelled)
}


upcomingflight(){
    
  this.upcoming= this.flightstatus.filter((trip:any)=>{
    return trip.status=="upcoming";
  })       
  console.log("my upcomingflight data",this.upcoming)
}

};


