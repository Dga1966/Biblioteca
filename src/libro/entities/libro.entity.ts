import { Autor } from "src/autor/entities/autor.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Libro {
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    titulo: string;

    @Column()
    paginas: number;
    
    @ManyToOne(() => Autor, (autor) => autor.libros)
    autor: Autor;
}
