import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-holidaypack',
  templateUrl: './holidaypack.component.html',
  styleUrls: ['./holidaypack.component.scss']
})
export class HolidaypackComponent implements OnInit {
//   horizontalPosition: MatSnackBarHorizontalPosition = 'start';
//   verticalPosition: MatSnackBarVerticalPosition = 'bottom';
// display=""
  constructor(private _snackBar: MatSnackBar) {}


  
  // openSnackBar() {
  //   this._snackBar.open('Cannonball!!', 'Splash', {
  //     horizontalPosition: this.horizontalPosition,
  //     verticalPosition: this.verticalPosition,
  //   });
  // }
 


  ngOnInit(): void {
    
  }

//   getvalue(val:any){
//     console.log(val)
// this.display=val
//
}
