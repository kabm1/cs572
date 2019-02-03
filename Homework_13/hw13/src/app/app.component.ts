import { Component, Output } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw13';
  @Output() name = new Array();
  
  constructor(private dataServe: DataService){
    localStorage.clear();
    
  }
  async ngOnInit(){
   
    await this.dataServe.getOnlineData().subscribe(doc=>{window.localStorage.setItem("data",JSON.stringify(doc.results))});
   
     
      }
      
    
   
  }

