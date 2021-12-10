import { Request, Response } from 'express';
import { findById, save, findAll, update } from '../repository/rent.repository';

import validateAll from '../utils/checkRent';

class RentController {
    async store(req: Request, res: Response) {
        const { driver, automobile, delivery_date } = req.body;

        if (!(await validateAll(driver, automobile)))
            return res.status(404).json({
                mensagem: 'Driver and/or Automobile are unavailable or not exist',
            });

        const rent = save({
            driver,
            automobile,
            withdrawal_date: new Date().toDateString(),
            delivery_date,
        });

        return res.json(rent);
    }

    async find(req: Request, res: Response) {
        return res.send(await findAll());
    }

    async finish(req: Request, res: Response) {
        const id: string = req.params.id;

        const rent = await findById(id);

        if (!rent) return res.status(404).json({ mensagem: 'Rent not found' });

        rent!.delivery_date = new Date().toDateString() as any;

        await update(rent);

        return res.json(rent);
    }
}

export default new RentController();
