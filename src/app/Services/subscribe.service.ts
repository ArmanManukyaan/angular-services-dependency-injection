import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  OnSubscribeClicked(type: string) {
    alert("Thank You for your. " + type + " subscribing. You can access the services now.")
  }
}
