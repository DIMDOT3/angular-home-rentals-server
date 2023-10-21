import express, { Request, Response } from 'express';
import cors from 'cors';
import homes from './routes/homes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/homes', homes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// app.get('/homes', (req, res) => {
//     res.json(locations);
// });

// app.get('/homes/:id', (req, res) => {
//     const location = locations.filter(location => location.id === Number(req.params.id));
//     res.json(location[0]);
// });

// let myHomes = [];
// app.get('/my-homes', (req, res) => {
//   res.json(myHomes);
// });
// app.post('/my-homes', (req, res) => {
//   console.log(req.body);
//   myHomes.push(req.body);
//   res.sendStatus(202);
// });

export default app;
