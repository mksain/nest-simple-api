import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import {Car, CarStatus} from './car.model';
import { title } from 'process';

@Controller('cars')
export class CarsController {

    constructor(private carsService:CarsService)
    {

    }

    @Get('/')
    getAllCars():Car[]
    {
        return this.carsService.getAllCars()
    }

    @Get('/:id')
    getCarById(@Param('id') id:string):Car
    {
        return this.carsService.getCarById(id);
    }

    @Post()
    createCar(@Body('title') title:string,
    @Body('description') description:string):Car{
        return this.carsService.createCars(title,description)
    }

    @Delete('/:id')
    deleteCar(@Param('id') id:string)
    {
        this.carsService.deleteCar(id);

        return "car is deleted"
    }

   @Patch('/:id')
    updateCarStatus(@Param('id') id:string,
    @Body('status') status:CarStatus)
    {
        return this.carsService.updateCar(id,status)
    }
}
