import { AppRoute } from './AppRoute';
import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import './controllers/LoginCotroller';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['asdfjkl'] }));
app.use(router);
app.use(AppRoute.getInstance());

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
