import { Injectable } from '@angular/core';   
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
   
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';  
  
@Injectable()  
export class CommonService {  
  
  constructor(private http: Http) { }  
  
  saveTvShow(tvShow){      
    return this.http.post('http://localhost:8080/api/SaveTvShow/', tvShow)  
            .map((response: Response) =>response.json())              
  }  
  
  GetTvShow(){       
    return this.http.get('http://localhost:8080/api/getTvShow/')  
            .map((response: Response) => response.json())              
  }  
 deleteTvShow(id){   
    return this.http.post('http://localhost:8080/api/deleteTvShow/',{'id': id})  
            .map((response: Response) =>response.json())               
  }  
  
}  