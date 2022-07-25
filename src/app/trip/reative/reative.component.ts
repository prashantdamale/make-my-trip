import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reative',
  templateUrl: './reative.component.html',
  styleUrls: ['./reative.component.scss']
})
export class ReativeComponent implements OnInit {
 
  constructor() { }
  myForm=new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  })

  ngOnInit(): void {

  }
  onSubmit(){
    
  }

}
