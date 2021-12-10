import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'automobile' })
export class Automobile {
    @PrimaryColumn()
    plate: string;

    @Column()
    model: string;

    @Column()
    color: string;
}
