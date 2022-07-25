import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetdataService {

  constructor(private http:HttpClient) { }
  // convertDollartoruppes(dollar :number){
  //   return 600
  // }
  getconfigData(){
    //asset json cha data cha path
  let urlpath='assets/APUser/mockdata.json'
  return this.http.get(urlpath)
  }
   
  getlogingidpassword(){
    let idpassword='assets/Myportfoliodata/portfoliologindata.json'
    return this.http.get(idpassword)
    }
contactdata(){
    let contactme='assets/Myportfoliodata/contact.json'
    return this.http.get(contactme)
    }

    
  myflightsdata(){
    let flightfdata='assets/makemytripdata/TRIPSTATUSDATA.json'
    return this.http.get(flightfdata)
  }

  citynamedata(){
    let citydata='assets/makemytripdata/cityname.json'
    return this.http.get(citydata)
  }
}

