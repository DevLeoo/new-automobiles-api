import { Router } from 'express';
import Rent from '../controllers/Rent.controller';

const routes: Router = Router();

routes.get('/', Rent.findAll);

routes.post('/', Rent.store);

routes.put('/finished/:id', Rent.finish);

export default routes;
