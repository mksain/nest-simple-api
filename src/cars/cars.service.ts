import { Injectable } from '@nestjs/common';
import { Car, CarStatus } from './car.model';

@Injectable()
export class CarsService {
   private cars:Car[]=[];  

   getAllCars():Car[]
   {
       return this.cars;
   }

   getCarById(id:string):Car
   {
        return this.cars.find((item)=>{
          return  item.id===id;
        })
   }

   createCars(title:string,description:string):Car
   {
       const id=new Date().toString();
       const car:Car={
        id,
        title,
        description,
        status:CarStatus.BOLERO
       }
       this.cars.push(car)
       return car;
   }

   deleteCar(id:string)
   {
        this.cars=this.cars.filter(item=>item.id!==id)
   }

   updateCar(id:string,carStatus:CarStatus):Car
   {
       let car=this.getCarById(id)
       car.status=carStatus;

       return car;
   }
}
