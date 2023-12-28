import mongoose from 'mongoose';
// import { Homes } from '../server';
// import { MyHomes } from '../server'
import { HousingLocation } from 'src/app/housing-location/housing-location.interface';
import Home from '../models/home.model';
import MyHome from '../models/my-home.model';

class HomesRepository {
  async getHomes() {
    try {
      const homes = await Home.find();
      return homes;
    } catch(error) {
      throw error;
    }
  }

  async getHome(id: string) {
    try {
      const home = await Home.findOne({_id: id});
      return home;
    } catch(error) {
      throw error;
    }
  }

  async getMyHomes() {
    try {
      const myHomes = MyHome.find()
      return myHomes;
    } catch(error) {
      throw error;
    }
  }

  async addToMyHomes(home: HousingLocation) {
    try {
      const addHome = new MyHome(home);
      await addHome.save()
    } catch(error) {
      throw error;
    }
  }
}

export default new HomesRepository();
