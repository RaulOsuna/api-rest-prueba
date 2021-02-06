import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

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
  
  this.api.get_data().subscribe(response=>{
    for (let key in response['data']) {
      this.keys.push({key: key, value: response['data'][key]});
    }
    this.dtTrigger.next();
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
