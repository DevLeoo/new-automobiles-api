import { getRepository } from 'typeorm';
import { Driver } from '../database/entities/Drivers';

export const findById = async (id: string) => {
    const repository = getRepository(Driver);
    return await repository.findOne({ where: { id } });
};

export const save = async (driver: { name: string }) => {
    const repository = getRepository(Driver);
    const driverCreated = repository.create(driver);
    await repository.save(driverCreated);

    return driverCreated;
};

export const findAll = async () => {
    const repository = getRepository(Driver);
    return await repository.find();
};

export const update = async (driver: any) => {
    const repository = getRepository(Driver);
    await repository.save(driver);
};

export const remove = async (id: string) => {
    const repository = getRepository(Driver);
    return await repository.delete(id);
};
export default { findById, save, findAll, update };
