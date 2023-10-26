import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Libro {
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column
    autor: string;

    @Column
    titulo: string;

    @Column
    paginas: number;

}
