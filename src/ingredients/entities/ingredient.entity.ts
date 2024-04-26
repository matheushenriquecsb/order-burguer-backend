import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type IngredientsDocument = HydratedDocument<Ingredients>;

@Schema()
export class Ingredients {
  @Prop()
  paes: string[];

  @Prop()
  carnes: string[];

  @Prop()
  molhos: string[];

  @Prop()
  opcionais: string[];
}

export const IngredientsSchema = SchemaFactory.createForClass(Ingredients);
