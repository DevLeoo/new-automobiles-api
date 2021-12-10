import { Router } from 'express';

import Car from './automobiles';
import Driver from './drivers';
import Rent from './rent';

const routes = Router();

routes.use('/automobile', Car);
routes.use('/driver', Driver);
routes.use('/rent', Rent);

export default routes;
