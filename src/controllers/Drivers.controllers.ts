import { Request, Response } from 'express';
import {
    findById,
    save,
    findAll,
    update,
    remove,
} from '../repository/drivers.repository';

class DriverController {
    async store(req: Request, res: Response) {
        const { id, name } = req.body;
        const driverExists = await findById(id);

        if (driverExists) return res.sendStatus(409);

        return res.json(await save({ name }));
    }

    async find(req: Request, res: Response) {
        return res.send(await findAll());
    }

    async findOne(req: Request, res: Response) {
        const id: string = req.params.id as string;

        const result = await findById(id);
        if (!result) return res.status(404).json({ mensagem: `Driver not found` });

        return res.status(200).send(result);
    }

    async update(req: Request, res: Response) {
        const id: string = req.params.id;
        const { name } = req.body;

        const driver = await findById(id);

        driver!.name = name;
        await update(driver);

        return res.json(driver);
    }

    async delete(req: Request, res: Response) {
        const id: string = req.params.id as string;
        const resp = await remove(id);
        if (resp.affected == 0)
            return res.status(404).json({ mensagem: 'Driver not found' });
        return res.send('Driver Deleted');
    }
}

export default new DriverController();
