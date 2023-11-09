import { Libro } from "src/libro/entities/libro.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


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
  
  @OneToMany(() => Libro, (libro) => libro.autor)
  libros: Libro[];
}
