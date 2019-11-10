import { CallsService } from '../../services/calls.service';
import { User } from './../../interfaces/user';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private calls: CallsService) { }

  user: User;
  users: User[];

  ngOnInit() {
  }

  getUsers() {
    this.calls.getUsers().subscribe((data: User[]) => {
      console.log(data);
      this.users = data;
    });
  }

}
