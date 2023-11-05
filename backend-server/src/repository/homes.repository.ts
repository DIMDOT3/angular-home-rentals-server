import { HousingLocation } from 'src/app/housing-location/housing-location.interface';
import { Homes } from '../server';

class HomesRepository {
  getHomes() {
    return Homes.getAll();
  }

  getHome(id: number) {
    const home = Homes.get((home) => home.id === id);
    if (!home) {
      throw Error(`Home with id: ${id} does not exist.`);
    }
  }
}

export default new HomesRepository();
