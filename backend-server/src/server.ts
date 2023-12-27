import { Database } from 'simpl.db';
import app from './app';
import homesSeed from './data/homes-seed.json';
import { HousingLocation } from 'src/app/housing-location/housing-location.interface';

const port = process.env['PORT'] || 3200;
export const mainDir = __dirname;

const db = new Database({
  autoSave: true,
  dataFile: `${mainDir}/data/db/database.json`,
  collectionsFolder: `${mainDir}/data/db`,
});

export const Homes = db.createCollection<HousingLocation>('homes');
export const MyHomes = db.createCollection<HousingLocation>('my-homes');

homesSeed.forEach((home) => {
  Homes.create(home);
});

app.listen(port, () => {
  console.log(`Homes API listening on port ${port}`);
  console.log(mainDir);
});
