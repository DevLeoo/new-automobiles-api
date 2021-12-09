import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import validateAll from '../utils/checkRent';
import { Rent } from '../database/entities/Rent';

class RentController {
    async store(req: Request, res: Response) {
        const repository = getRepository(Rent);

        const { driver, automobile, delivery_date } = req.body;

        if (!(await validateAll(driver, automobile)))
            return res.status(404).json({
                mensagem: 'Driver and/or Automobile are unavailable or not exist',
            });

        const rent = repository.create({
            driver,
            automobile,
            withdrawal_date: new Date().toDateString(),
            delivery_date,
        });
        await repository.save(rent);

        return res.json(rent);
    }

    async findAll(req: Request, res: Response) {
        const repository = getRepository(Rent);
        const result = await repository.find();

        return res.send(result);
    }

    async finish(req: Request, res: Response) {
        const repository = getRepository(Rent);
        const id: string = req.params.id;

        const rent = await repository.findOne({
            where: { id },
        });

        if (!rent) return res.status(404).json({ mensagem: 'Rent not found' });

        rent!.delivery_date = new Date().toDateString() as any;

        await repository.save(rent!);

        return res.json(rent);
    }
}

export default new RentController();
