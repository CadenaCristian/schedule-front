import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ScheduleService } from '../../../service/schedule.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  CheckedForm: boolean = true;
  loginForm = this.formBuilder.group({
    email: [null, Validators.compose([
      Validators.required, Validators.email
    ])]
  });
  registerForm = this.formBuilder.group({
    userName: [null, Validators.required],
    password: [null, Validators.required],
    email: [null, Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder, private scheduleService: ScheduleService
  ) { }

  ngOnInit(): void {
  }

  getCode = async (email:string) => {
    let resp = await this.scheduleService.getCode(email);
    console.log("resp: ", resp);
  }

  singInChecked() {
    let singIn = document.getElementById("singIn");
    let singUp = document.getElementById("singUp");
    singIn?.classList.add('activate');
    singUp?.classList.remove('activate');
    this.CheckedForm = true;
  }

  singUpChecked() {
    let singIn = document.getElementById("singIn");
    let singUp = document.getElementById("singUp");
    singUp?.classList.add('activate');
    singIn?.classList.remove('activate');
    this.CheckedForm = false;
  }

}
