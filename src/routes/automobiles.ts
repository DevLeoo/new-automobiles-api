import { Router } from 'express';
import Automobile from '../controllers/Automobiles.controller';

const routes: Router = Router();

routes.get('/', Automobile.findAll);

routes.get('/:plate', Automobile.findOne);

routes.post('/', Automobile.store);

routes.put('/update/:plate', Automobile.update);

routes.delete('/:plate', Automobile.delete);

export default routes;
