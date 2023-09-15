import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPoints } from './user-points/user-points.entity';
import { PointTransaction } from './point-transaction/point-transaction.entity';
import { Product } from './product/product.entity';
import { PointTransactionModule } from './point-transaction/point-transaction.module';
import { ProductModule } from './product/product.module';
import { UserPointsModule } from './user-points/user-points.module';
import { UserProductModule } from './user-product/user-product.module';
import { UserProduct } from './user-product/user-product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'postgres',
      username: 'postgres',
      password: 'postgres',
      entities: [UserPoints, PointTransaction, Product, UserProduct],
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
    }),
    PointTransactionModule,
    ProductModule,
    UserPointsModule,
    UserProductModule,
  ],
})
export class AppModule {}
