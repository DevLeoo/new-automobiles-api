import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'rent' })
export class Rent {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    car: string;

    @Column()
    driver: string;

    @Column()
    withdrawal_date: Date;

    @Column()
    delivery_date: Date;
}
