import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop()
  nome: string;

  @Prop()
  carne: string;

  @Prop()
  pao: string;

  @Prop()
  molho: string;

  @Prop()
  opcionais: string[];

  @Prop()
  status: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
