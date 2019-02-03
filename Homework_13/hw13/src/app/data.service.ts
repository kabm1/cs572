import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class DataService {
   data = [];
  constructor(private http: HttpClient) { }
  
   getOnlineData(){
    console.log('getONlineData wokring');
   var d = this.http.get('https://randomuser.me/api/?results=10');
   return d;
  }
 
  
  getCachedData(){
   return localStorage.getItem('data');
    }
  }

    
  

