import { Component, OnInit } from '@angular/core';
import { CrudHttpService } from '../../service/crud-http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

studList:any = [];
 ID: string = ""; 
 stuname: string = ""; 
 stucode: string = ""; 
 examtpc: string = ""; 
 dte: string = "";
 tme: string = ""; 
 email: string = ""; 
 mob: string = "";
 i:any;
 s:any;
 displayStyle = "none";

  constructor(private crudHttpService: CrudHttpService, private router:Router) { }

  ngOnInit(): void {
    this.ShowAllUsers();
  }

  ShowAllUsers(){
    this.crudHttpService.list().subscribe((response)=>{
    this.studList = response;
    },(error=>{
    }));
    }

    Edit(data:any)
    {
     let user_data = {studname: data.t1, studcode: data.t2, exam: data.t3, date: data.t4, time: data.t5, email: data.t6, mobile: data.t7}
    this.crudHttpService.update(this.ID,user_data).subscribe((response)=>{
    this.ShowAllUsers();
     },(error=>{
     }));
     this.displayStyle = "none";
     } 

sendtoUpdate(user_data: any)
{
  this.displayStyle = "block";
 //Two-way-Data Binding
 this.ID=user_data.id
 this.stuname=user_data.studname
 this.stucode=user_data.studcode
 this.examtpc=user_data.exam
 this.dte=user_data.date
 this.tme=user_data.time
 this.email=user_data.email
 this.mob=user_data.mobile
}
delete_user(id: any)
{
 this.crudHttpService.delete(id).subscribe((response)=>{
 this.ShowAllUsers();
 },(error=>{
 }));
}

 logout()
 {
  var a = confirm("Do you want to Logout?");
  if(a == true)
  {
  localStorage.removeItem('token'); 
  this.router.navigate(['adminlogin']);
  }

 }

 close()
 {
  this.displayStyle = "none";
 }
}
