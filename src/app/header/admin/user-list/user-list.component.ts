import {Component} from '@angular/core';
import {UserService} from "../../../Services/user.service";
import {NgForOf} from "@angular/common";
import {User} from '../../../Models/User';

@Component({
  selector: 'user-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  constructor(private userService: UserService) {
  }

  userList = this.userService.GetALlUsers();


  ShowUserDetails(user: User) {
    this.userService.OnShowUserDetails(user);
  }
}
