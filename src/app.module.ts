import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { MongooseModule } from '@nestjs/mongoose';
import { StatusModule } from './status/status.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    OrdersModule,
    IngredientsModule,
    StatusModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
