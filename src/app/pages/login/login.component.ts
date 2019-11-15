import { CallsService } from '../../services/calls.service';

import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private call: CallsService, private router: Router) { }

  ngOnInit() {
  }

  loginCall(data) {
    this.call.login(data.value).subscribe((response: {
      token: string
    }) => {
      localStorage.setItem('token', response.token);
      this.router.navigateByUrl('books');
    }, (err: HttpErrorResponse) => {
      console.log(err.message);
    })
  }
}
