import { Module } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { IngredientsController } from './ingredients.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ingredients, IngredientsSchema } from './entities/ingredient.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Ingredients.name, schema: IngredientsSchema },
    ]),
  ],

  controllers: [IngredientsController],
  providers: [IngredientsService],
})
export class IngredientsModule {}
