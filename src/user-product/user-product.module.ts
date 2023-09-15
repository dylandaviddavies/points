import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProductService } from './user-product.service';
import { UserProduct } from './user-product.entity';
import { UserProductController } from './user-product.controller';
import { UserProductSubscriber } from './user-product.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([UserProduct])],
  providers: [UserProductService, UserProductSubscriber],
  controllers: [UserProductController],
})
export class UserProductModule {}
