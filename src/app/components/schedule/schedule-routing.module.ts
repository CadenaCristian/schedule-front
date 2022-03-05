import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateScheduleComponent } from './create-schedule/create-schedule.component';
import { ListScheduleComponent } from './list-schedule/list-schedule.component';

const routes: Routes = [
  {
    path:"",
    children: [
      {path: "listSchedule", component: ListScheduleComponent},
      {path: "createSchedule", component: CreateScheduleComponent},
      {path: "**", redirectTo: "listSchedule"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
