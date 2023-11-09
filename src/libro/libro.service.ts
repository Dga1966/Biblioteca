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
    return this.libroRepository.save(createLibroDto);
  }

  findAll(): Promise<Libro[]> {
    return this.libroRepository.find({
      relations: { autor: true },
    });
  }

  findOne(id: number): Promise<Libro | null> {
    return this.libroRepository.findOne({ where: { id }, relations: { autor: true } });
  }

  update(id: number, updateLibroDto: UpdateLibroDto) {
    return this.libroRepository.update(id, updateLibroDto);
  }

  async remove(id: number): Promise<void> {
    await this.libroRepository.delete(id);
  }
}
