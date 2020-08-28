import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  usersList = [];

  constructor(public userService: UsersService) { }


  ngOnInit(): void {
    this.usersList = this.userService.getUsersList();
  }





}
