import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutorService } from './AutorService';
import { AutorController } from './autor.controller';
import { Autor } from './autor.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Autor])],
  controllers: [AutorController],
  providers: [AutorService],
})
export class AutorModule {}
