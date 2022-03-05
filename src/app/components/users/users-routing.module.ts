import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:"",
    children: [
      {path: "listUsers", component: ListUsersComponent},
      {path: "login", component: LoginComponent },
      {path: "**", redirectTo: "login"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
