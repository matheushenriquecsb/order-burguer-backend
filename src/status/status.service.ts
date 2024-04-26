import { Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Status } from './entities/status.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class StatusService {
  constructor(@InjectModel(Status.name) private statusModel: Model<Status>) {}
  async create(createStatusDto: CreateStatusDto) {
    return await this.statusModel.create(createStatusDto);
  }
  
  async findAll() {
    return await this.statusModel.find();
  }

  update(id: number, updateStatusDto: UpdateStatusDto) {
    return `This action updates a #${id} status`;
  }

  remove(id: number) {
    return `This action removes a #${id} status`;
  }
}
