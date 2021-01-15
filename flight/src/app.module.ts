import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { Flights } from './flights/flights.entity';
import { FlightsModule } from './flights/flights.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'test',
      database: 'transportation',
      entities: [Flights],
      synchronize: true,
    }),
     FlightsModule,
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
