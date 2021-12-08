import { Router } from 'express';

import Car from './cars';
import Driver from './drivers';
import Rent from './rent';

const routes = Router();

routes.use('/cars', Car);
routes.use('/cars', Driver);
routes.use('/cars', Rent);

export default routes;
