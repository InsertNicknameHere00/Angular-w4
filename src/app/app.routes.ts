import { Routes } from '@angular/router';
import { TrafficLightDataService } from './TrafficLight.service';
import { TrafficLightHorizontalComponent } from './Traffic-light-horizontal/TrafficLight-horizontal.component';
import { TrafficLightVerticalComponent } from './Traffic-light-vertical/TrafficLight-vertical.component';

export const routes: Routes = [
{path: 'service', component: TrafficLightDataService},
{path: 'horizontal', component: TrafficLightHorizontalComponent},
{path: 'vertical', component: TrafficLightVerticalComponent}
];
