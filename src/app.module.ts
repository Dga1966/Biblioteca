import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutorModule } from './autor/autor.module';
import { LibroModule } from './libro/libro.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Libro } from './libro/entities/libro.entity';
import { Autor } from './autor/entities/autor.entity';

@Module({
  imports: [
    AutorModule,
    LibroModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '192.168.88.143',
      port: 5432,
      username: 'biblio',
      password: 'secret',
      database: 'biblioteca',
      entities: [Autor, Libro],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
