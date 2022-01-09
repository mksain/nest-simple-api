import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { BreedsModule } from './breeds/breeds.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [CarsModule, BreedsModule,MongooseModule.forRoot('mongodb+srv://manish:manish123456@cluster0.u6otg.mongodb.net/nest_testing?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
