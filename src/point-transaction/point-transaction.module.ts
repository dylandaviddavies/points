import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PointTransactionController } from './point-transaction.controller';
import { PointTransactionService } from './point-transaction.service';
import { PointTransaction } from './point-transaction.entity';
import { PointTransactionSubscriber } from './point-transaction.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([PointTransaction])],
  providers: [PointTransactionService, PointTransactionSubscriber],
  controllers: [PointTransactionController],
})
export class PointTransactionModule {}
