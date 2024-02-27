import {Component, inject, OnInit} from '@angular/core';
import {UserService} from '../../../Services/user.service';
import { User } from '../../../Models/User';
import { NgIf } from '@angular/common';
@Component({
  selector: 'user-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
  selectedUser: User;
  userService = inject(UserService);

  ngOnInit() {
    this.userService.OnUserDetailsClicked.subscribe((data: User) => {
      this.selectedUser = data
      console.log(this.selectedUser);
    });
  }
}

