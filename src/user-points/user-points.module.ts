import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPointsController } from './user-points.controller';
import { UserPointsService } from './user-points.service';
import { UserPoints } from './user-points.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserPoints])],
  providers: [UserPointsService],
  controllers: [UserPointsController],
})
export class UserPointsModule {}
