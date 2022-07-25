import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from, interval, map } from 'rxjs';
import { AssetdataService } from 'src/app/services/assetdata.service';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.scss']
})
export class ObsComponent implements OnInit {
sequenceodnumber=[10,20,30,40,50]
observablenumber=from(this.sequenceodnumber)

mapnumber=[1,2,3,4,5]
maptable=from(this.mapnumber)
studdata:any
secondscounter = interval(3000)
geolocations:any
geolocationslink: any
isshowdatatable:boolean=false
  constructor(private router:Router, private xyz: AssetdataService, private activateroute:ActivatedRoute,private loacation:Location ) { }

  ngOnInit(): void {
    // console.log("observable",this.sequenceodnumber)
    // this.observablenumber.subscribe(value => console.log(value))
 

//  this.secondscounter.subscribe(x=>{
//   console.log('msg print hot rahnar $(x) second')
//  })

// this.maptable.pipe(map (x=>x*2)).subscribe(Value => console.log(Value))
//  console.log(this.loacation.getState())

//   let money= this.assetdata.convertDollartoruppes(600)
// console.log(money)

// this.xyz.getconfigData().subscribe((response:any)=>{
//  this.studdata = response
// console.log("mock  Data Responce=",response)
  // console.log(this.studdata)

// this.geolocations =response?.data;
// this.geolocationslink =response?.links;
// console.log("Geolocations",this.geolocations)
// console.log("mock Data Responce =" ,response)
// })
 }
getlocationdatabutten(){
this.xyz.getconfigData().subscribe((response:any)=>{
    
 this.geolocations =response?.data;
this.isshowdatatable=this.geolocations? true:false
this.geolocationslink =response?.links;
 console.log("Geolocations",this.geolocations)
 console.log("mock Data Responce =" ,response)
},
 (error)=>{
  console.log("error occupide",error.msg)
  }
)
 }
  }