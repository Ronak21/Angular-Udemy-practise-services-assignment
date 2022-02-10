import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {

  inactiveUsers: string[] = [];

  constructor(private userService: UserService) {
    this.inactiveUsers = this.userService.getInactiveUsers();
  }

  onSetToActive(id: number) {
    this.userService.setActive(id);
  }
}
