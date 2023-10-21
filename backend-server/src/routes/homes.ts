import express, { Request, Response } from 'express';
import locations from '../data/locations.json';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json(locations);
});

router.get('/:id', (req: Request, res: Response) => {
  const location = locations.filter(
    (location) => location.id === Number(req.params['id']),
  );
  res.json(location[0]);
});

export default router;
