import { Injectable } from '@nestjs/common';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Libro } from './entities/libro.entity';

@Injectable()
export class LibroService {

  constructor(
    @InjectRepository(Libro)
    private libroRepository: Repository<Libro>,
  ) {}

  create(createLibroDto: CreateLibroDto) {
    return 'This action adds a new libro';
  }

  findAll(): Promise<Libro[]> {
    return this.libroRepository.find();
  }

  findOne(id: number): Promise<Libro | null> {
    return this.libroRepository.findOneBy({ id });
  }

  update(id: number, updateLibroDto: UpdateLibroDto) {
    return `This action updates a #${id} libro`;
  }

  async remove(id: number): Promise<void> {
    await this.libroRepository.delete(id);
  }
}
