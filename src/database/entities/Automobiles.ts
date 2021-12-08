import { Entity, Column } from 'typeorm';

@Entity()
export class Photo {
    @Column()
    placa: string | undefined;

    @Column()
    modelo: string | undefined;

    @Column()
    cor: string | undefined;
}
