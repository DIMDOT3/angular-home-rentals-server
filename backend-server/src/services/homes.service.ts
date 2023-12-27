import homes from '../data/homes-seed.json';
import { HousingLocation } from '../../../src/app/housing-location/housing-location.interface';
import homesRepository from '../repository/homes.repository';

class HomesService {
  getAllHomes() {
    return homesRepository.getHomes();
  }

  getHome(homeId: string) {
    const id = Number(homeId);
    const home = homesRepository.getHome(id);
    return home;
  }

  getMyHomes() {
    return homesRepository.getMyHomes();
  }

  addToMyHomes(home: HousingLocation) {
    homesRepository.addToMyHomes(home);
  }
}

export default new HomesService();
