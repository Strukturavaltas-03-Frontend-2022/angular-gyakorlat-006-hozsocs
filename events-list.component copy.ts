import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { Event } from 'src/app/model/event';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventListComponent implements OnInit {
eventList:Event[] = this.eventService.getAll();

constructor(private eventService:EventService) {

   }

  ngOnInit(): void {
  }

}
