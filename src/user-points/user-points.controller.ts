import { Controller, Get, Param } from '@nestjs/common';
import { UserPointsService } from './user-points.service';

@Controller('/user/:user/points')
export class UserPointsController {
  constructor(private userPointsService: UserPointsService) {}

  @Get()
  async get(@Param('user') user: string) {
    const userPoints = await this.userPointsService.findOne(user);
    return userPoints?.points ?? 0;
  }
}
