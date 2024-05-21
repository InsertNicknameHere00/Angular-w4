import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrafficLightDataService } from '../TrafficLight.service';

@Component({
  selector: 'traffic-light-vertical',
  imports: [CommonModule],
  templateUrl: './TrafficLight-vertical.component.html',
  styleUrls: ['./TrafficLight-vertical.component.css'],
  standalone: true
})
export class TrafficLightVerticalComponent{
  @Input() trafficLightData!: TrafficLightDataService;

  ngOnInit() {
    this.trafficLightData.color = 'red';
    this.changeLight();
  }

  
  changeLight() {
    this.trafficLightData.timeInterval = setInterval(() => {
    if (this.trafficLightData.switchDirection === false && this.trafficLightData.accident === false) {
      switch (this.trafficLightData.color) {

        case 'red':
          setTimeout(() => { 
              this.trafficLightData.color = 'yellow';
              console.log('Light changed to yellow');
          }, 5000); // After 5 seconds
          break;

        case 'green':
            this.trafficLightData.switchDirection = true;
            console.log('Switching directions');
          break;
        case 'yellow':
          setTimeout(() => {
              this.trafficLightData.color = 'green';
              console.log('Light changed to green');
          }, 2000); // After 2 seconds
          break;

        default:
          this.trafficLightData.color = 'off';
          break;
      }
    } else if (this.trafficLightData.switchDirection === true && this.trafficLightData.accident === false) {
      switch (this.trafficLightData.color) {
        case 'red':
            this.trafficLightData.switchDirection = false;
            console.log('Directions back to standard');
          break;

        case 'green':
          setTimeout(() => {
            this.trafficLightData.color = 'yellow';
            console.log('Light changed to yellow');
        }, 5000); // After 5 seconds
          break;

        case 'yellow':
          setTimeout(() => {
              this.trafficLightData.color = 'red';
              console.log('Light changed to red');
          }, 2000); // After 2 seconds
          break;

        default:
          this.trafficLightData.color = 'off';
          break;
        }
      }

  }, 12000); // Total cycle time
  }
  
  processCrossVertical() {
    if (this.trafficLightData.color === 'yellow' && this.trafficLightData.color === 'yellow') {
      alert('Improper crossing, accident may occur!');
    }
    if (this.trafficLightData.color === 'red' && this.trafficLightData.color === 'green') {
      console.log('Safe to cross');
    }
  }
}