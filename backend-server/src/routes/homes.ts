import express, { NextFunction, Request, Response } from 'express';
import homesService from '../services/homes.service';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  const homes = homesService.getAllHomes();
  res.json(homes);
});

router.get('/mine', (req: Request, res: Response) => {
  const myHomes = homesService.getMyHomes();
  res.send(myHomes)
});

router.post('/mine', (req: Request, res: Response) => {
  console.log(req.body)
  homesService.addToMyHomes(req.body);
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
  const home = homesService.getHome(req.params['id']);
  console.log(home)
  if(!home) {
    res.status(404).send({ message: `Home with id: ${req.params['id']} does not exist.` });
  }
  res.status(200).json(home);
});

export default router;
