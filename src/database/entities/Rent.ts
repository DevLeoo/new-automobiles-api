import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'rent' })
export class Rent {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    automobile: string;

    @Column()
    driver: string;

    @Column()
    withdrawal_date: Date;

    @Column()
    delivery_date: Date;
}
