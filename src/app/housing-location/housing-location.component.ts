import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HousingLocation } from './housing-location.interface';
import { HousingService } from '../services/housing-service/housing.service';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
  housingService = inject(HousingService);

  constructor(private toastr: ToastrService) {}

  addToMyHomes(home: HousingLocation) {
    this.housingService.addToMyHomesList(home);
    this.toastr.success(`${home.name} was added to My Homes.`)
  }
}
