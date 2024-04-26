import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}
  async create(createOrderDto: CreateOrderDto) {
    const data = await this.orderModel.create(createOrderDto);
    return data;
  }

  async findAll() {
    return await this.orderModel.find();
  }

  async remove(nome: string) {
    return await this.orderModel.findOneAndDelete({ nome: nome });
  }

  async update(payload, nome: string) {
    return await this.orderModel.findOneAndUpdate({ nome: nome }, payload);
  }
}
