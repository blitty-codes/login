import { CallsService } from '../../services/calls.service';

import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private call: CallsService) { }

  ngOnInit() {
  }

  registerCall(data) {
    console.log(data.value);
    this.call.register(data.value).subscribe((response) => {
      console.log('ghcdhgcdgh')
      window.location.pathname = 'books';
    }, (err: HttpErrorResponse) => {
      console.log('error!!')
      console.log(err.message);
    })
  }

}
