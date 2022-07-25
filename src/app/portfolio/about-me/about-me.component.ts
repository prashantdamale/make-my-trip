import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  username:any=""
  constructor() { }

  ngOnInit(): void {
    console.log(history.state.username)
    this.username=history.state.username
  }

}
