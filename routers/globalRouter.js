import express from 'express';
import routes from '../routes';

import { home, search } from '../controllers/videoControllers';
import { join, login, logout } from '../controllers/userControllers';

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;
