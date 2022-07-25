import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from, interval, map } from 'rxjs';
import { AssetdataService } from 'src/app/services/assetdata.service';

@Component({
  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.scss']
})
export class LogingComponent implements OnInit {
  getlogindatas:any
  constructor(private router:Router, private abc: AssetdataService, private activateroute:ActivatedRoute,private loacation:Location ) { }

  ngOnInit(): void {
    // this.abc.getconfigData().subscribe((response:any)=>{
    //   this.getlogindatas=response?.loginiddata
    //   console.log("logingpas",this.getlogindatas)
    //   console.log("mock data responce",response)
    //        })
  
    this.abc.getconfigData().subscribe((response:any)=>{
      console.log("mock data",response)
      })
    }
  }