import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { Driver } from '../database/entities/Drivers';

class DriverController {
    async store(req: Request, res: Response) {
        const repository = getRepository(Driver);

        const { id, name } = req.body;
        const driverExists = await repository.findOne({ where: { id } });

        if (driverExists) return res.sendStatus(409);

        const driver = repository.create({ id, name });
        await repository.save(driver);

        return res.json(driver);
    }

    async findAll(req: Request, res: Response) {
        const repository = getRepository(Driver);
        const result = await repository.find();

        return res.send(result);
    }

    async findOne(req: Request, res: Response) {
        const repository = getRepository(Driver);
        const id: string = req.params.id as string;

        const result = await repository.find({ where: { id } });
        if (!result) return res.status(404).json({ mensagem: `Driver not found` });

        return res.status(200).send(result);
    }

    async update(req: Request, res: Response) {
        const repository = getRepository(Driver);
        const id: string = req.params.id;
        const { name } = req.body;

        const driver = await repository.findOne({
            where: { id },
        });

        driver!.name = name;
        await repository.save(driver!);

        return res.json(driver);
    }

    async delete(req: Request, res: Response) {
        const repository = getRepository(Driver);
        const id: string = req.params.id as string;
        await repository.delete(id);

        return res.send('Driver Deleted');
    }
}

export default new DriverController();
