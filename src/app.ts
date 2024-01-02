import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import homes from './routes/homes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/homes', homes);
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/health', (req: Request, res: Response) => {
  res.status(200).send('App is live!')
});
export default app;
