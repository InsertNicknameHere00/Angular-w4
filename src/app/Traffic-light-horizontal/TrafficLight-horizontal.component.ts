import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrafficLightDataService } from '../TrafficLight.service';

@Component({
  selector: 'traffic-light-horizontal',
  imports: [CommonModule],
  templateUrl: './TrafficLight-horizontal.component.html',
  styleUrls: ['./TrafficLight-horizontal.component.css'],
  standalone: true
})
export class TrafficLightHorizontalComponent {
  @Input() trafficLightData!: TrafficLightDataService;

  ngOnInit() {
    this.trafficLightData.color1 = 'green';
    this.changeLight();
  }

    changeLight() {
      this.trafficLightData.timeInterval1 = setInterval(() => {
      if (this.trafficLightData.switchDirection1 === false && this.trafficLightData.accident === false) {
        switch (this.trafficLightData.color1) {

          case 'red':
            setTimeout(() => { 
                this.trafficLightData.color1 = 'yellow';
                console.log('Light changed to yellow');
            }, 5000); // After 5 seconds
            break;

          case 'green':
              this.trafficLightData.switchDirection1 = true;
              console.log('Switching directions');
            break;
          case 'yellow':
            setTimeout(() => {
                this.trafficLightData.color1 = 'green';
                console.log('Light changed to green');
            }, 2000); // After 2 seconds
            break;

          default:
            this.trafficLightData.color1 = 'off';
            break;
        }
      } else if (this.trafficLightData.switchDirection1 === true && this.trafficLightData.accident === false) {
        switch (this.trafficLightData.color1) {
          case 'red':
              this.trafficLightData.switchDirection1 = false;
              console.log('Directions back to standard');
            break;

          case 'green':
            setTimeout(() => {
              this.trafficLightData.color1 = 'yellow';
              console.log('Light changed to yellow');
          }, 5000); // After 5 seconds
            break;

          case 'yellow':
            setTimeout(() => {
                this.trafficLightData.color1 = 'red';
                console.log('Light changed to red');
            }, 2000); // After 2 seconds
            break;

          default:
            this.trafficLightData.color1 = 'off';
            break;
          }
        }
    }, 12000); // Total cycle time
    }

  processCrossHorizontal() {
    if (this.trafficLightData.color1 === 'yellow' && this.trafficLightData.color1 === 'yellow') {
      alert('Improper crossing, accident may occur!');
    }
    if (this.trafficLightData.color1 === 'green' && this.trafficLightData.color1 === 'red') {
      console.log('Safe to cross');
    }
  }
}