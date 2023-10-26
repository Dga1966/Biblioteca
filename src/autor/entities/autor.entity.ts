import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Autor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
 mail: string;

    @Column({ default: true })
  activo: boolean;
}
