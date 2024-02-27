import {EventEmitter, Injectable} from '@angular/core';
import {User} from "../Models/User";
import {LoggerService} from './logger.service';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private logger: LoggerService) {

  }

  users: User[] = [
    new User('Steve Smith', 'Male', 'Monthly', 'Active'),
    new User('Mery Jane', 'Female', 'Yearly', 'Inactive'),
    new User('Mark tyler', 'Male', 'Quaterly', 'Active')
  ];

  OnUserDetailsClicked: EventEmitter<User> = new EventEmitter<User>();

  OnShowUserDetails(user: User) {
    this.OnUserDetailsClicked.emit(user);
  }

  GetALlUsers() {
    return this.users;
  }

  CreateUser(name: string, gender: string, subType: string, status: string) {
    let user = new User(name, gender, subType, status);
    this.users.push(user);
    this.logger.LogMessage(name, status);
  }
}

// export const USER_TOKEN = new InjectionToken<UserService>("USER_SERVICE")
