import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { AssetdataService } from 'src/app/services/assetdata.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  msg='';
  uservalue:any
  // userdetails=[{
  //   username:'pratiksha',
  //   email:'pratiksha@gmail.com',
  //   password:'pratiksha'
  // },
  // {
  //   username:'priti',
  //   email:'priti@gmail.com',
  //   password:'priti'
  // },
  // {
  //   username:'harshad',
  //   email:'harshad@gmail.com',
  //   password:'harshad'
  // },
  // {
  //   username:'amol',
  //   email:'amol@gmail.com',
  //   password:'amol'
  // },
  // {
  //   username:'prashant',
  //   email:'prashant@gmail.com',
  //   password:'prashant'
  // }]
  loginform=new FormGroup({
    username1: new FormControl(''),
    emailid: new FormControl(''),
    password1: new FormControl('')
  })
  constructor(private router : Router, private xyz: ActivatedRoute, private service:AssetdataService) {}
  ngOnInit(): void {
    this.service.getlogingidpassword().subscribe((response:any)=>{
      this.uservalue = response?.userdetails
      console.log(this.uservalue)
    })
  }

  submitform(){
    let details = this.uservalue.find((elem:any)=>{
      return   (this.loginform.value.username1 == elem.name && this.loginform.value.emailid == elem.email && this.loginform.value.password1 == elem.password)
      });
      if (details) {
        this.router.navigate(['/navbar'],{
          queryParams : { ppp : this.loginform.value.username1}
        })
      }
        else{
          this.msg = "Please enter correct input"


    // let details = this.uservalue.find((ele:any)=>{return(this.loginform.value.username1 === ele.name && 
    //   this.loginform.value.emailid === ele.email && this.loginform.value.password1 === ele.password)})
    // if(details){
    //   this.router.navigate(['/navbar'],{queryParams:{p:this.loginform.value.username1}})
    // }else{
    //   this.msg='please enter correct email & Password details'
    }
  }
}
