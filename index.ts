import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
