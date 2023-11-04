import express, { NextFunction, Request, Response } from 'express';
import homesService from '../services/homes.service';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  const homes = homesService.getAllHomes();
  res.json(homes);
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
  const err = new Error('Not found');
  err.message = { message: `Home with id: ${req.params['id']} does not exist` };
  return next(err);
  const home = homesService.getHome(req.params['id']);
  res.json(home);
});

router.get('/mine', (req: Request, res: Response) => {
  res.send('mine');
});

export default router;
