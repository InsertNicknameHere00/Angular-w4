import { Component, OnInit } from '@angular/core';
import { TrafficLightDataService } from './TrafficLight.service';
import { TrafficLightHorizontalComponent } from './Traffic-light-horizontal/TrafficLight-horizontal.component';
import { TrafficLightVerticalComponent } from './Traffic-light-vertical/TrafficLight-vertical.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TrafficLightHorizontalComponent, TrafficLightVerticalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public trafficLightData: TrafficLightDataService = new TrafficLightDataService();
  public title: string = 'Homework';

  ngOnInit() {
    alert('Starting the simulation!');
  }
}
