import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowexamComponent } from './showexam/showexam.component';
import { StudExamBookingComponent } from './stud-exam-booking/stud-exam-booking.component';
import { StudentsectionComponent } from './studentsection/studentsection.component';

const routes: Routes = [
  {path:'studsection',component:StudentsectionComponent},
  {path:'studexambooking', component:StudExamBookingComponent},
  {path:'showexam', component:ShowexamComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
