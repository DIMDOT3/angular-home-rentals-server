import express, { NextFunction, Request, Response } from 'express';
import homesService from '../services/homes.service';
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const homes = await homesService.getAllHomes();
  res.json(homes);
});

router.get('/mine', async (req: Request, res: Response) => {
  const myHomes = await homesService.getMyHomes();
  res.json(myHomes);
});

router.post('/mine', async (req: Request, res: Response) => {
  await homesService.addToMyHomes(req.body);
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.params['id']);
  const home = await homesService.getHome(req.params['id']);
  // if(!home) {
  //   res.status(404).send({ message: `Home with id: ${req.params['id']} does not exist.` });
  // } else {
  //   res.status(200).json(home);
  // }
  console.log(home)
  res.status(200).json(home);
});

export default router;
