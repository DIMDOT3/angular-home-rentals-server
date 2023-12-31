import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { HousingService } from '../services/housing-service/housing.service';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location/housing-location.interface';

@Component({
  selector: 'app-my-homes',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './my-homes.component.html',
  styleUrl: './my-homes.component.css',
})
export class MyHomesComponent {
  myHomesList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingService
      .getMyHomes()
      .then((myHomesList: HousingLocation[]) => {
        this.myHomesList = myHomesList;
      });
  }
  onDelete(homeId: string) {
    console.log('deleting!')
    console.log(homeId);
}
}
