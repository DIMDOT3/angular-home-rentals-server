import homes from '../data/homes.json';
import { HousingLocation } from '../../../src/app/housing-location/housing-location.interface';

class HomesService {
  homes: HousingLocation[];
  constructor(homes: HousingLocation[]) {
    this.homes = homes;
  }
  getAllHomes() {
    return this.homes;
  }

  getHome(homeId: string) {
    const home = this.homes.filter((home) => home.id === Number(homeId));
    return home[0];
  }
}

export default new HomesService(homes);
