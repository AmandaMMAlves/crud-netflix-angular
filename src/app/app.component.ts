import { Component, OnInit } from '@angular/core';  
import {FormGroup,FormControl,Validators,FormsModule, } from '@angular/forms';  
import {CommonService} from './common.service';  
   
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})  
export class AppComponent {  
    
     
  constructor(private newService :CommonService,) {   }  
   Repdata;  
   valbutton ="Salvar";  
   
   
ngOnInit() {    
  this.newService.GetTvShow().subscribe(data =>  this.Repdata = data)  
}  
  
onSave = function(tvShow,isValid: boolean) {    
  tvShow.mode= this.valbutton;  
  this.newService.saveTvShow(tvShow)  
  .subscribe(data =>  {  alert(data.data);  
       
    this.ngOnInit();
    this.clean();
 
  }   
  , error => this.errorMessage = error )  
    
}      
edit = function(kk) {  
	this.id = kk._id;  
	this.nome= kk.nome;  
	this.descricao = kk.descricao;  
	this.valbutton ="Alterar";  
}

clean = function()  {
	this.id = "";  
	this.nome= "";  
	this.descricao = "";  
}
  
delete = function(id) {  
this.newService.deleteTvShow(id)  
.subscribe(data =>   { alert(data.data) ; this.ngOnInit();}, error => this.errorMessage = error )   
}  
  
}  