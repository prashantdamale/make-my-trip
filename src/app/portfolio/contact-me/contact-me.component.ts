import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetdataService } from 'src/app/services/assetdata.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  contactloc:any
  constructor(private router : Router, private activateroute: ActivatedRoute, private abc:AssetdataService) { }

  ngOnInit(): void {

    
      this.abc.contactdata().subscribe((Response:any)=>
        {
          this.contactloc=Response
          console.log("contact data",this.contactloc)
        },(error)=>
        console.log("Error ocured",error)
        )
      }
    }
