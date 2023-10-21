import app from './app';

const port = process.env['PORT'] || 3200;

app.listen(port, () => {
  console.log(`Homes API listening on port ${port}`);
});
