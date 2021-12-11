import test from 'ava';
import sinon from 'sinon';
import { Request, Response } from 'express';
import Automobile from '../../controllers/Automobiles.controller';

import * as repository from '../../repository/automobiles.repository';

const mockedTest = { ...test };
mockedTest.serial.afterEach.always(() => {
    sinon.restore();
});
const automobile: any = {
    plate: 'ABC-1234',
    model: 'Honda Civic',
    color: 'Black',
};

let req: Request = {
    body: { ...automobile },
} as any;

let res: Response = {
    sendStatus: () => {
        return 'conflict';
    },
} as any;

mockedTest.serial('Should test store method and return conflict', async t => {
    sinon.stub(repository, 'findByPlate').resolves(automobile);
    sinon.stub(repository, 'save').resolves();

    const result = await Automobile.store(req, res);

    t.deepEqual(result, 'conflict' as any);
});

mockedTest.serial('Should test store method and automobile', async t => {
    const findByPlateStub = sinon
        .stub(repository, 'findByPlate')
        .resolves(automobile);

    const saveStub = sinon.stub(repository, 'save').resolves();

    const { model, car } = automobile;
    req.body = {
        plate: 'ABC-1245',
        model,
        car,
    };
    const result = await Automobile.store(req, res);

    t.deepEqual(result, 'conflict' as any);

    t.true(findByPlateStub.calledWith(req.body.plate));
    t.true(saveStub.notCalled);
});
