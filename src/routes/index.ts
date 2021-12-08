import { Router } from 'express';

import Cars from './cars';
const routes = Router();

routes.use('/cars', Cars);

export default routes;
