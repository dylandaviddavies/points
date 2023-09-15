import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PointTransaction } from '../entities/point-transaction.entity';

@Injectable()
export class PointTransactionService {
  constructor(
    @InjectRepository(PointTransaction)
    private pointTransactionRepository: Repository<PointTransaction>,
  ) {}

  findOne(id: number): Promise<PointTransaction | null> {
    return this.pointTransactionRepository.findOneBy({ id });
  }

  async save(pointTransaction: PointTransaction) {
    return await this.pointTransactionRepository.save(pointTransaction);
  }

  async remove(id: string): Promise<void> {
    await this.pointTransactionRepository.delete(id);
  }
}
