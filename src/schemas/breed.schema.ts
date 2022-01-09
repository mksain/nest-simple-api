import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BreedDocument = Breed & Document;

@Schema()
export class Breed {
  @Prop()
  name: string;

  @Prop()
  class: string;

}

export const BreedSchema = SchemaFactory.createForClass(Breed);