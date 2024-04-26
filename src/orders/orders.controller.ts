import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Patch()
  update(@Body() updateDto: UpdateOrderDto, @Param('nome') nome: string) {
    return this.ordersService.update(updateDto, nome);
  }

  @Delete(':nome')
  remove(@Param('nome') nome: string) {
    return this.ordersService.remove(nome);
  }
}
