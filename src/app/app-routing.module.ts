import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'users',
    loadChildren: () => import('./components/users/users.module').then( m => m.UsersModule )
  },
  {
    path: 'schedule',
    loadChildren: () => import('./components/schedule/schedule.module').then( m => m.ScheduleModule )
  },
  {
    path: '**', redirectTo: 'users'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
