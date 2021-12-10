import { Router } from 'express';
import Rent from '../controllers/Rent.controller';

const routes: Router = Router();

routes.get('/', Rent.find);

routes.post('/', Rent.store);

routes.put('/:id', Rent.finish);

export default routes;
