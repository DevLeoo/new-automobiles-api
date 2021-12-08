import path from 'path';
import dotenv from 'dotenv';
import { createConnections, Connection } from 'typeorm';

dotenv.config();

export default async (): Promise<Connection[]> => {
    return createConnections([
        {
            name: 'default',
            type: 'mysql',
            host: process.env.DB_HOST,
            port: +process.env.DB_PORT!,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [`${path.resolve(__dirname, '../entities')}/*.{ts,js}`],
            subscribers: [
                `${path.resolve(__dirname, '../../subscriber')}/*.{ts,js}`,
            ],
        },
    ]);
};
