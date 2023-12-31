import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private toastr: ToastrService) {
    this.getMyHomes();
  }
  async onDelete(homeId: string, name: string) {
    const responseStatus = await this.housingService.deleteFromMyHomesList(homeId);
    if(responseStatus !== 202) {
      this.toastr.error(`Something went wrong. Unable to remove ${name} from My Homes.`)
    } else {
      this.toastr.success(`${name} was successfully removed from My Homes.`);
      this.getMyHomes();
    }
  }

  private getMyHomes() {
    this.housingService
      .getMyHomes()
      .then((myHomesList: HousingLocation[]) => {
        this.myHomesList = myHomesList;
      });
  }
}
