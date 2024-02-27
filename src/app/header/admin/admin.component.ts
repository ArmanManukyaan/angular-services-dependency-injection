import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {UserListComponent} from "./user-list/user-list.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {UserService} from '../../Services/user.service';
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    FormsModule,
    UserListComponent,
    UserDetailComponent
  ],
  templateUrl: './admin.component.html',
})
export class AdminComponent {
  constructor(private userService: UserService) {
  }

  name: string = '';
  gender: string = 'Male';
  subType: string = 'Yearly';
  status: string = 'Active';

  CreateNewUser() {
    this.userService.CreateUser(this.name, this.gender, this.subType, this.status);
  }
}
