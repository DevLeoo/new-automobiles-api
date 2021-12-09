import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { Automobile } from '../database/entities/Automobiles';

class AutomobileController {
    async store(req: Request, res: Response) {
        const repository = getRepository(Automobile);

        const { plate, model, color } = req.body;
        const automobileExists = await repository.findOne({ where: { plate } });

        if (automobileExists) return res.sendStatus(409);

        const automobile = repository.create({ plate, model, color });
        await repository.save(automobile);

        return res.json(automobile);
    }

    async findAll(req: Request, res: Response) {
        const repository = getRepository(Automobile);
        const result = await repository.find();

        return res.send(result);
    }

    async findOne(req: Request, res: Response) {
        const repository = getRepository(Automobile);
        const plate: string = req.params.plate as string;

        const result = await repository.find({ where: { plate } });
        if (!result)
            return res.status(404).json({ mensagem: `Automobile not found` });

        return res.status(200).send(result);
    }

    async update(req: Request, res: Response) {
        const repository = getRepository(Automobile);
        const { model, color } = req.body;
        const plate: string = req.params.plate;

        const automobilesExists = await repository.findOne({
            where: { plate },
        });
        if (!automobilesExists)
            return res.status(404).json({ mensagem: 'Automobile not found' });

        automobilesExists!.model = model;
        automobilesExists!.color = color;

        await repository.save(automobilesExists!);

        return res.json(automobilesExists);
    }

    async delete(req: Request, res: Response) {
        const repository = getRepository(Automobile);
        const plate: string = req.params.plate as string;
        await repository.delete(plate);

        return res.send('Automobile Deleted');
    }
}

export default new AutomobileController();
