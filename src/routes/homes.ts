import express, { NextFunction, Request, Response } from 'express';
import homesService from '../services/homes.service';
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const homes = await homesService.getAllHomes();
  if(!homes) {
    return res.status(404).json({ message: 'We could not find homes.' })
  }
  return res.json(homes);
});

router.get('/mine', async (req: Request, res: Response) => {
  const myHomes = await homesService.getMyHomes();
  if(!myHomes) {
    return res.status(404).json({ message: 'We could not find your homes.'})
  }
  return res.json(myHomes);
});

router.post('/mine', async (req: Request, res: Response) => {
  const result: any = await homesService.addToMyHomes(req.body);
  if (!result) {
    return res.status(404).json({ message: 'We could not find your homes.'});
  }
  return res.sendStatus(200);
});

router.delete('/mine/:id', async (req: Request, res: Response) => {
  const result = await homesService.deleteMyHome(req.params['id']);
  if(!result) {
    return res.status(404).json({ message: `We could not find your home with id: ${req.params['id']}`});
  }
  return res.sendStatus(202);
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const home = await homesService.getHome(req.params['id']);
  if(!home) {
    return res.status(404).send({ message: `Home with id: ${req.params['id']} does not exist.` });
  }
  return res.status(200).json(home);
});

export default router;
