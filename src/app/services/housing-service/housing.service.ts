import { Injectable } from '@angular/core';
import { HousingLocation } from '../../housing-location/housing-location.interface';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'http://localhost:3200';
  constructor() {}

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(`${this.url}/homes`);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(
    _id: string,
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/homes/${_id}`);
    return (await data.json()) ?? {};
  }

  async addToMyHomesList(home: HousingLocation) {
    const response = await fetch(`${this.url}/homes/mine`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(home)
    });
  }

  async deleteFromMyHomesList(homeId: string) {
    const response = await fetch(`${this.url}/homes/mine/${homeId}`, {
      method: 'DELETE',
    });
  }

  async getMyHomes() {
    const data = await fetch(`${this.url}/homes/mine`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
