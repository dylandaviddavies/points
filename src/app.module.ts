import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPoints } from './entities/user-points.entity';
import { PointTransaction } from './entities/point-transaction.entity';
import { UserController } from './controllers/user.controller';
import { UserPointsService } from './services/user-points.service';
import { PointTransactionController } from './controllers/point-transaction.controller';
import { PointTransactionService } from './services/point-transaction.service';
import { PointTransactionSubscriber } from './subscribers/point-transaction.subscriber';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'postgres',
      username: 'postgres',
      password: 'postgres',
      entities: [UserPoints, PointTransaction],
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([UserPoints, PointTransaction]),
  ],
  controllers: [AppController, UserController, PointTransactionController],
  providers: [
    UserPointsService,
    PointTransactionService,
    PointTransactionSubscriber,
  ],
})
export class AppModule {}
