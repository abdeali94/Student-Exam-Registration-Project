import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudHttpService } from '../../service/crud-http.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private router: Router, private crud: CrudHttpService) { }

  ngOnInit(): void {
  }

  Login(form:NgForm)
  {
    this.crud.list_new().subscribe((res:any)=>{
      const user = res.find((a: any) => {
        return a.uname === form.value.t1 && a.pwd === form.value.t2
      })      
      
     if(user)
     {
     alert("Logged in Successfully");
     localStorage.setItem('token',"abcdefghijklmnopqrstuvwxyz");
     this.router.navigate(['admindashboard']);
     }
     else
     {
      alert("Username or password entered is incorrect.");
     }

     form.reset();
    },(error=>{
    }));
  }

}
