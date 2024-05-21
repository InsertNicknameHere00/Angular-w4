import { Injectable, Input } from '@angular/core';
import {TrafficLightVerticalComponent } from './Traffic-light-vertical/TrafficLight-vertical.component';
import {TrafficLightHorizontalComponent } from './Traffic-light-horizontal/TrafficLight-horizontal.component';

@Injectable({
  providedIn: 'root',
})

export class TrafficLightDataService {

  @Input() trafficLightVertical!: TrafficLightVerticalComponent;
  @Input() trafficLightHorizontal!: TrafficLightHorizontalComponent;

  color: 'red' | 'yellow' | 'green' | 'off' | any;
  color1: 'red' | 'yellow' | 'green' | 'off' | any;

  timeInterval: any;
  timeInterval1: any;
  accidentTimer: any;
  switchDirection: boolean = false;
  switchDirection1: boolean = true;
  accident: boolean = false;
  FlashingInProgress:boolean = false;

simulation(){
  this.trafficLightVertical.changeLight();
  this.trafficLightHorizontal.changeLight();
}

processAccident() {
  this.accident = true;
  this.FlashingInProgress = true;
  alert('Accident occurred');
  this.flashYellowAccident();
}

  flashYellowAccident() {
    clearInterval(this.timeInterval);
    clearInterval(this.timeInterval1);
    if (this.accident === true) {
      let isYellow = false;
      this.accidentTimer = setInterval(() => {
        this.color = isYellow ? 'yellow' : 'off';
        this.color1 = isYellow ? 'yellow' : 'off';
        isYellow = !isYellow;
      }, 450);
      this.stopFlashing();
    }
    console.log('Flashing yellow light');
  }
  
  stopFlashing() {
    setTimeout(() => {
      clearInterval(this.accidentTimer);
      this.accidentTimer = null;
      this.accident = false;
      console.log('Flashing stopped');
      this.color = 'red';
      this.color1= 'green';
      this.AccidentCleared();
      this.clearIntervalsAndTimeouts();
      this.simulation();
    }, 10000); // Flash for 10 seconds
  }

  AccidentCleared() {
    if (this.accident===false && this.FlashingInProgress===true && this.accidentTimer===null) {
      setTimeout(() => {
        this.FlashingInProgress = false;
        alert('Accident has been cleared!');
      }, 10000);
    }
  }

  clearIntervalsAndTimeouts() {
    if (this.timeInterval && this.timeInterval1) {
      clearInterval(this.timeInterval);
      clearInterval(this.timeInterval1);
      this.timeInterval = null;
      this.timeInterval1 = null;
      console.log('Intervals cleared');
    }
    if (this.accidentTimer) {
      clearInterval(this.accidentTimer);
      this.accidentTimer = null;
      console.log('Timeouts cleared');
    }
  }
}
