import { Injectable } from '@nestjs/common';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Autor } from './entities/autor.entity';

@Injectable()
export class AutorService {
  constructor(
    @InjectRepository(Autor)
    private autorRepository: Repository<Autor>,
  ) {}

  create(createAutorDto: CreateAutorDto) {
    console.log(createAutorDto);
    return this.autorRepository.insert(createAutorDto);
  }

  findAll(): Promise<Autor[]> {
    return this.autorRepository.find();
  }

  findOne(id: number): Promise<Autor | null> {
    return this.autorRepository.findOneBy({ id });
  }

  update(id: number, updateAutorDto: UpdateAutorDto) {
    return this.autorRepository.update(id, updateAutorDto);
  }

  async remove(id: number): Promise<void> {
    await this.autorRepository.delete(id);
  }
}
