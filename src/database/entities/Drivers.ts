import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'driver' })
export class Driver {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;
}
