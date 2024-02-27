import {Component, inject} from '@angular/core';
import {SubscribeService} from "../../../Services/subscribe.service";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',

})
export class HeroComponent {


  // constructor(private subService: SubscribeService) {
  // }
  subService = inject(SubscribeService);
  OnSubscribe() {
    this.subService.OnSubscribeClicked('yearly');
  }
}
