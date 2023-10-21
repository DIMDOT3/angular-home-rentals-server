import express, { Request, Response } from 'express';
import homesService from '../services/homes';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  const homes = homesService.getAllHomes();
  res.json(homes);
});

router.get('/:id', (req: Request, res: Response) => {
  //   const location = locations.filter(
  //     (location) => location.id === Number(req.params['id']),
  //   );
  const home = homesService.getHome(req.params['id']);
  res.json(home);
});

router.get('/mine', (req: Request, res: Response) => {
  res.send('mine');
});

export default router;
