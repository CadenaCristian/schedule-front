import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { CreateScheduleComponent } from './create-schedule/create-schedule.component';
import { ListScheduleComponent } from './list-schedule/list-schedule.component';


@NgModule({
  declarations: [
    CreateScheduleComponent,
    ListScheduleComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule
  ]
})
export class ScheduleModule { }
