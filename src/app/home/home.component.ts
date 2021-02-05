import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})


export class HomeComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  
  dtTrigger= new Subject();
  data;
  keys=[];
  constructor(private api:ApiService,private httpClient: HttpClient){
    //this.data=this.api.get_data();
    
    
  }
data_refresh(){
  this.httpClient.get('http://18.191.152.48/api/enums/categoriasMarket').subscribe(data => {
      this.data = JSON.stringify(data['data'])
      for (let key in data['data']) {
        console.log(data['data'][key])
        this.keys.push({key: key, value: data['data'][key]});
        this.dtTrigger.next();
      }
    }); 
}

  ngOnInit(): void {
   
    this.data_refresh()
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  

}
