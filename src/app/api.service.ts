import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data_retrieve;
  constructor(private httpClient: HttpClient) { }

  async get_data(){ 
    this.httpClient.get('http://18.191.152.48/api/enums/categoriasMarket').subscribe(data => {
      console.log(data)
      this.data_retrieve = data
    });
    
    return this.data_retrieve
  }
}
