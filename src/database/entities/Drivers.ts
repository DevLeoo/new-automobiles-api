import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id: number | undefined;

    @Column()
    name: string | undefined;
}
