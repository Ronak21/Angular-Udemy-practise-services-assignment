import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  activeUsers: string[] = [];

  constructor(private userService: UserService) {
    this.activeUsers = this.userService.getActiveUsers();
  }

  onSetToInactive(id: number) {
    this.userService.setInactive(id);
  }
}
