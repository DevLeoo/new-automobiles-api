import { Router } from 'express';
import Drivers from '../controllers/Drivers.controllers';

const routes: Router = Router();

routes.get('/', Drivers.find);

routes.get('/:id', Drivers.findOne);

routes.post('/', Drivers.store);

routes.put('/:id', Drivers.update);

routes.delete('/:id', Drivers.delete);

export default routes;
