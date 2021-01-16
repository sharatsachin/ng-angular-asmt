import { Component, OnInit } from '@angular/core';
import { User } from './models/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  usersToAdd: User[] = [
    {
      name: 'Sharat Sachin',
      username: 'sharatsachin',
      email: 'sharat.sachin@nagarro.com',
    },
    {
      name: 'Pearlie Donaldson',
      username: 'pearliedonaldson',
      email: 'pearlie.donaldson@nagarro.com',
    },
    {
      name: 'Dejesus Branch',
      username: 'dejesusbranch',
      email: 'dejesus.branch@nagarro.com',
    },
  ];

  isYellow = {
    'has-background-warning': false,
  };

  constructor() {
    // comment below line for seeing message for no users
    this.users.push(...this.usersToAdd);
  }

  ngOnInit(): void {}
}
