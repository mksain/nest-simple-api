import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Breed, BreedDocument } from 'src/schemas/breed.schema';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';

@Injectable()
export class BreedsService {

  constructor(@InjectModel(Breed.name) private breedModel: Model<BreedDocument>) {}

 async create(createBreedDto: CreateBreedDto):Promise<Breed> {
    return new this.breedModel(createBreedDto).save();
  }

  findAll() {
    return this.breedModel.find();
  }

  findOne(name: string) {
    return this.breedModel.find({name});
  }

  update(name: string, updateBreedDto: UpdateBreedDto) {
    return this.breedModel.updateOne({name},{$set:{...updateBreedDto}})
  }

  remove(name: string) {
    return this.breedModel.deleteOne({name})
  }
}
