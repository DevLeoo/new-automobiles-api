import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column()
    car: string | undefined;

    @Column()
    driver: string | undefined;

    @Column()
    date: Date | undefined;
}
