import { HousingLocation } from 'src/app/housing-location/housing-location.interface';
import { Homes } from '../server';
import { MyHomes } from '../server'

class HomesRepository {
  getHomes() {
    return Homes.getAll();
  }

  getHome(id: number) {
    return Homes.get((home) => home.id === id);
  }

  getMyHomes() {
    console.log(MyHomes.getAll())
    return MyHomes.getAll();
  }

  addToMyHomes(home: HousingLocation) {
    MyHomes.create(home)
    MyHomes.save();
  }
}

export default new HomesRepository();
