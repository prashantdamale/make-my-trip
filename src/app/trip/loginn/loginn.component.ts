import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';
import { AssetdataService } from 'src/app/services/assetdata.service';

@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.scss']
})
export class LoginnComponent implements OnInit {
  loginuservalue:any
  msg:any
  loginform=new FormGroup({
    emailid11: new FormControl(''),
    password11: new FormControl('')
  })
  constructor( private router:Router , private xyz: ActivatedRoute, private service:AssetdataService ) { }

  ngOnInit(): void {
    this.service.getlogingidpassword().subscribe((response:any)=>{
      this.loginuservalue = response?.userdetails
      console.log(this.loginuservalue)
    })
  }
  

  submitform(){
    let details = this.loginuservalue.find((elem:any)=>{
      return   (this.loginform.value.emailid11 == elem.email && this.loginform.value.password11 == elem.password)
      });
      if (details) {
        this.router.navigate(['/navication'],
        {

    
        })
      }
        else{
          this.msg = "Please enter correct input"

  }
  }
}
