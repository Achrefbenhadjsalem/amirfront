import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  message: string = ''; // Add message property with default value

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.notifications$.subscribe(message => {
      this.message = message;
      setTimeout(() => {
        this.message = ''; // Hide the notification after 3 seconds
      }, 3000);
    });
  }
}
