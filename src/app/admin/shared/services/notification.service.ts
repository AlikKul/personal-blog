import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class NotificationService {

  public notification$ = new Subject<string>();

  showNotification(text: string) {
    this.notification$.next(text);
  }
}
