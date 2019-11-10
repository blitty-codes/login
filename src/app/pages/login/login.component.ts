import { CallsService } from '../../services/calls.service';

import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private call: CallsService) { }

  ngOnInit() {
  }

  loginCall(data) {
    this.call.login(data.value).subscribe((response) => {
      window.location.pathname = 'users';
    }, (err: HttpErrorResponse) => {
      console.log(err.message);
    })
  }
}
