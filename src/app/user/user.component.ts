import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

const randomUser = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  displayUser = DUMMY_USERS[randomUser];

  get imageUrl() {
    return '../assets/users/' + this.displayUser.avatar;
  }

  onSelectUser() {
    const randomUser = Math.floor(Math.random() * DUMMY_USERS.length);
    this.displayUser = DUMMY_USERS[randomUser];
  }
}
