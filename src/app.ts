import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';

require('express-async-errors');

import routes from './routes';

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    private config(): void {
        dotenv.config();

        this.app.use(cors());
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
        this.app.use(routes);
        this.app.use(App.errorHandling);
        this.app.disable('x-powered-by');
    }

    private static errorHandling(
        error: Error,
        req: Request,
        res: Response,
        next: NextFunction,
    ) {
        const { statusCode, message, errors, code, communicationIds } = <any>error;

        const apiError = {
            code: statusCode || code || 500,
            message,
            errors,
            communicationIds,
        };

        return res.status(apiError.code || 500).send(apiError);
    }
}

export default new App().app;
