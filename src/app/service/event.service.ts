import { Injectable } from '@angular/core';
import { Event } from '../model/event';

@Injectable({
  providedIn: 'root'
})



export class EventService {

  event1:Event=new Event(

    'aladár',
    '2022.11.01',
    '12:55',
    'hungary'
  );
   event2:Event=new Event(
    'Géza',
    '2022.11.01',
    '12:55',
    'hungary'
   );
    event3:Event=new Event(
      'Jóska',
    '2022.11.01',
    '12:55',
    'hungary'
    );

  constructor() { }

  getAll(): Event[] {
    return [this.event1, this.event2, this.event3];
  }


}
