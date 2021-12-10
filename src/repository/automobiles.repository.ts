import { getRepository } from 'typeorm';
import { Automobile } from '../database/entities/Automobiles';

export const findByPlate = async (plate: string) => {
    const repository = getRepository(Automobile);
    return await repository.findOne({ where: { plate } });
};

export const save = async (automobile: {
    plate: string;
    model: string;
    color: string;
}) => {
    const repository = getRepository(Automobile);
    const automobileCreated = repository.create(automobile);
    await repository.save(automobileCreated);

    return automobileCreated;
};

export const findAll = async () => {
    const repository = getRepository(Automobile);
    return await repository.find();
};

export const update = async (automobile: any) => {
    const repository = getRepository(Automobile);
    await repository.save(automobile);
};

export const remove = async (plate: string) => {
    const repository = getRepository(Automobile);
    return await repository.delete(plate);
};
export default { findByPlate, save, findAll, update };
