import { Component, OnDestroy } from '@angular/core';
import { UserService } from './services/user.service';
import { take } from 'rxjs/operators/'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'artemas';
  subscriptions: Array<Subscription> = [];
  constructor(
    private userService: UserService
  ) {
    // Just testing out our api end point
    this.subscriptions.push(
      this.userService.test().subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      )
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe(); // Close all memory leaks
    });
  }
}
