import { CallsService } from '../../services/calls.service';

import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private call: CallsService, private router: Router) { }

  ngOnInit() {
  }

  registerCall(data) {
    this.call.register(data.value).subscribe((response: {
      token: string
    }) => {
      localStorage.setItem('token', response.token);
      this.router.navigateByUrl('books');
    }, (err: HttpErrorResponse) => {
      console.log(err.message);
    })
  }

}
