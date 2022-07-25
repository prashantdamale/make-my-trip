import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AssetdataService } from 'src/app/services/assetdata.service';

@Component({
  selector: 'app-onewaybooking',
  templateUrl: './onewaybooking.component.html',
  styleUrls: ['./onewaybooking.component.scss']
})
export class OnewaybookingComponent implements OnInit {
 
cityname:any
  Respo: any;
  filterflight:any=[];
  filterflightdataaa:any=[];
  filterdata:any;
  abc:any=FormGroup;
 
  constructor( private servicedata:AssetdataService) { }
  
  searchflight(){  
    // alert(this.abc.get('city1')?.value)

    this.filterflightdataaa=this.filterdata.filter((elem:any)=>{
    const xyz=(elem.fromm == this.abc.get('city1')?.value && elem.too == this.abc.get('city2')?.value)
    return xyz
    }
    )
    console.log("filterflight",this.filterflightdataaa)

  }
  
  ngOnInit(): void {
  this.abc = new FormGroup({
    city1:new FormControl(''),
    city2:new FormControl(''),

  })

    this.servicedata.citynamedata().subscribe((Respo)=>
    {
       this.cityname=Respo
      console.log(this.cityname)
    },
    (error)=> {
      console.log(error)
    })

    this.servicedata.myflightsdata().subscribe((Response: any) => {
      this.filterdata = Response?.travelInfo
     console.log("filterdata",this.filterdata)
     this.searchflight()
    },
    (error)=> {
      console.log(error)
    })
   
  }

  
}