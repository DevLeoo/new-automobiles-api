import { Request, Response } from 'express';
import {
    findByPlate,
    save,
    findAll,
    update,
    remove,
} from '../repository/automobiles.repository';

class AutomobileController {
    async store(req: Request, res: Response) {
        const { plate, model, color } = req.body;
        const automobileExists = await findByPlate(plate);

        if (automobileExists) return res.sendStatus(409);
        const automobile = save({ plate, model, color });
        return res.json(automobile);
    }

    async find(req: Request, res: Response) {
        return res.send(await findAll());
    }

    async findOne(req: Request, res: Response) {
        const plate: string = req.params.plate as string;

        const result = await findByPlate(plate);

        if (!result)
            return res.status(404).json({ mensagem: `Automobile not found` });

        return res.status(200).send(result);
    }

    async update(req: Request, res: Response) {
        const { model, color } = req.body;
        const plate: string = req.params.plate;

        const automobilesExists = await findByPlate(plate);

        if (!automobilesExists)
            return res.status(404).json({ mensagem: 'Automobile not found' });

        automobilesExists!.model = model;
        automobilesExists!.color = color;

        await update(automobilesExists);

        return res.json(automobilesExists);
    }

    async delete(req: Request, res: Response) {
        const plate: string = req.params.plate as string;
        const resp = await remove(plate);

        if (resp.affected == 0)
            return res.status(404).json({ mensagem: 'Automobile not found' });
        return res.send('Automobile Deleted');
    }
}

export default new AutomobileController();
