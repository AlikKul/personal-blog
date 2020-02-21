import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  text = '';
  showAniamtion = false;

  constructor(
    private notification: NotificationService
  ) { }

  ngOnInit() {
    this.notification.notification$.subscribe(note => {
      this.text = note;
      this.showAniamtion = true;
      setTimeout(() => {
        this.showAniamtion = false;
      }, 5000);
    });
  }

}
