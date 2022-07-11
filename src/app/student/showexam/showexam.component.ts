import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CrudHttpService } from '../../service/crud-http.service';

@Component({
  selector: 'app-showexam',
  templateUrl: './showexam.component.html',
  styleUrls: ['./showexam.component.css']
})
export class ShowexamComponent {

  constructor(private crudHttpService: CrudHttpService) { }

  userList:any = [];
  display = false;
  index:any;
  
  fetchDetails(form:NgForm)
  {
    this.crudHttpService.list().subscribe((response)=>{
       this.userList = response;
       let indexval = this.userList.findIndex((x:any) => x.studcode === form.value.studcode);

      if(indexval != -1)
      {
        this.display = true;
        this.index = indexval;
      }
      else
      {
        this.display = false;
        alert("Exam Details for Student Code entered does not exist");
      }

      form.reset();
      },(error=>{
      }));
  }
  }
