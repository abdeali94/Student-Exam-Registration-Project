import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CrudHttpService } from '../../service/crud-http.service';

@Component({
  selector: 'app-stud-exam-booking',
  templateUrl: './stud-exam-booking.component.html',
  styleUrls: ['./stud-exam-booking.component.css']
})
export class StudExamBookingComponent {

  constructor(private crudHttpService: CrudHttpService) { }

  Add(form: NgForm)
  {
    let user_data = {studname:form.value.t1, studcode:form.value.t2, exam:form.value.t3, date:form.value.t4, time:form.value.t5, email:form.value.t6, mobile:form.value.t7};

    this.crudHttpService.create(user_data).subscribe((response)=>
    { console.log(response) },(error=>{ }));

    form.reset();
    alert("Exam Booking Details entered successfully");
  }

}
