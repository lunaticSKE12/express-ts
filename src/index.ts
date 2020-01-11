import express, { Request, Response } from 'express';
import { router } from './ruotes/loginRoutes';

const app = express();

app.use(router);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
