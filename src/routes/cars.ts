import { NextFunction, Request, Response, Router } from 'express';

const routes: Router = Router();

routes.get('/', async (req: Request, res: Response, next: NextFunction) => {});

routes.get('/:placa', async (req: Request, res: Response, next: NextFunction) => {});

routes.post(
    '/register',
    async (req: Request, res: Response, next: NextFunction) => {},
);

routes.put('/update', async (req: Request, res: Response, next: NextFunction) => {});

routes.delete(
    '/delete/:placa',
    async (req: Request, res: Response, next: NextFunction) => {},
);

export default routes;
