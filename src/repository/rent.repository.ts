import { getRepository } from 'typeorm';
import { Rent } from '../database/entities/Rent';

export const findById = async (id: string) => {
    const repository = getRepository(Rent);
    return await repository.findOne({ where: { id } });
};

export const save = async (rent: {
    driver: string;
    automobile: string;
    withdrawal_date?: string;
    delivery_date?: string;
}) => {
    const repository = getRepository(Rent);
    const rentCreated = repository.create(rent);
    await repository.save(rentCreated);

    return rentCreated;
};

export const findAll = async () => {
    const repository = getRepository(Rent);
    return await repository.find();
};

export const update = async (driver: any) => {
    const repository = getRepository(Rent);
    await repository.save(driver);
};
