import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentsectionComponent } from './studentsection/studentsection.component';
import { StudExamBookingComponent } from './stud-exam-booking/stud-exam-booking.component';
import { FormsModule } from '@angular/forms';
import { ShowexamComponent } from './showexam/showexam.component';


@NgModule({
  declarations: [
    StudentsectionComponent,
    StudExamBookingComponent,
    ShowexamComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule
  ]
})
export class StudentModule { }
