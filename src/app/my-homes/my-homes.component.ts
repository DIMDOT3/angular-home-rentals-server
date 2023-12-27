import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { HousingService } from '../services/housing-service/housing.service';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location/housing-location.interface';

@Component({
  selector: 'app-my-homes',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, TableModule],
  templateUrl: './my-homes.component.html',
  styleUrl: './my-homes.component.css'
})
export class MyHomesComponent {
  myHomesList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  cols: any[];

  constructor() {
    this.housingService
      .getMyHomes()
      .then((myHomesList: HousingLocation[]) => {
        this.myHomesList = myHomesList;
      });
    this.cols = [
      { field: 'name', header: 'Listing Name' },
      { field: 'city', header: 'City' },
      { field: 'state', header: 'State' },
      { field: 'availableUnits', header: 'Available Units' },
      { field: '', header: ''}
    ]
  }
}
