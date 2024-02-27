import {Component} from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {AdminComponent} from "./admin/admin.component";
import {NgSwitch, NgSwitchCase} from "@angular/common";
import {SubscribeService} from "../Services/subscribe.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    HomeComponent,
    AdminComponent,
    NgSwitch,
    NgSwitchCase
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  selectedTab: string = 'home'


  constructor(private subService: SubscribeService) {
  }

  HomeClicked() {
    this.selectedTab = 'home';
  }

  AdminClicked() {
    this.selectedTab = 'admin';
  }

  OnSubscribe() {
    this.subService.OnSubscribeClicked('monthly');
  }
}
