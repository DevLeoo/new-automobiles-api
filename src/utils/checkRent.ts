import { Driver } from '../database/entities/Drivers';
import { Automobile } from '../database/entities/Automobiles';
import { Rent } from '../database/entities/Rent';
import { getRepository } from 'typeorm';

const validateConditions = async (
    driverId: string,
    automobilePlate: string,
): Promise<boolean | undefined> => {
    const driverExists: boolean | undefined = await checkDriver(driverId);
    const automobileExists: boolean | undefined = await checkAutomobile(
        automobilePlate,
    );

    if (!(driverExists && automobileExists)) return undefined;

    return true;
};

const checkDriver = async (driverId: string) => {
    const repository = getRepository(Driver);

    const result = await repository.findOne({ where: { id: driverId } });
    if (!result) return undefined;

    return true;
};

const checkAutomobile = async (automobilePlate: string) => {
    const repository = getRepository(Automobile);

    const result = await repository.findOne({ where: { plate: automobilePlate } });
    if (!result) return undefined;

    return true;
};

const checkisRentAvailable = async (
    driverId: string,
    automobilePlate: string,
): Promise<boolean | undefined> => {
    const repository = getRepository(Rent);

    const result = await repository.findOne({
        where: {
            driver: driverId,
            automobile: automobilePlate,
        },
    });

    if (result) return undefined;

    return true;
};

const validateAll = async (
    driverId: string,
    automobilePlate: string,
): Promise<boolean | undefined> => {
    const driverAutomobileExists = await validateConditions(
        driverId,
        automobilePlate,
    );
    const driverAutomobileAvailable = await checkisRentAvailable(
        driverId,
        automobilePlate,
    );

    if (!(driverAutomobileExists && driverAutomobileAvailable)) return undefined;
    return true;
};
export default validateAll;
