import homes from '../data/homes-seed.json';
import { HousingLocation } from '../../../src/app/housing-location/housing-location.interface';
import homesRepository from '../repository/homes.repository';

class HomesService {
  async getAllHomes() {
    const homes = await homesRepository.getHomes();
    return homes;
  }

  async getHome(homeId: string) {
    const home = await homesRepository.getHome(homeId);
    return home;
  }

  async getMyHomes() {
    const myHomes = homesRepository.getMyHomes();
    return myHomes
  }

  async addToMyHomes(home: HousingLocation) {
    await homesRepository.addToMyHomes(home);
  }

  async deleteMyHome(homeId: string) {
    return await homesRepository.deleteMyHome(homeId);
  }
}

export default new HomesService();
