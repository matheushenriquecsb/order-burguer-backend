import { Injectable } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { Ingredients } from './entities/ingredient.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectModel(Ingredients.name) private ingredientsModel: Model<Ingredients>,
  ) {}

  async create(payload: CreateIngredientDto) {
    await this.ingredientsModel.create(payload);
  }

  async get() {
    return await this.ingredientsModel.find();
  }
}
