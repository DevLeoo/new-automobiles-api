import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { validateConditions, checkisRentAvailable } from '../utils/checkRent';
import { Rent } from '../database/entities/Rent';

class RentController {
    async store(req: Request, res: Response) {
        const repository = getRepository(Rent);

        const { driver, automobile, delivery_date } = req.body;
        const checkConditions: boolean | undefined = await validateConditions(
            driver,
            automobile,
        );

        if (!checkConditions)
            return res.send({ mensagem: 'Driver and/or Automobile not exists' });

        if ((await checkisRentAvailable(driver, automobile)) === undefined)
            return res.send({
                mensagem: 'Driver and/or Automobile are unavailable',
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

        rent!.delivery_date = new Date().toDateString() as any;

        await repository.save(rent!);

        return res.json(rent);
    }
}

export default new RentController();
