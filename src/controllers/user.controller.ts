import { Controller, Get, Param } from '@nestjs/common';
import { UserPointsService } from '../services/user-points.service';

@Controller('/user')
export class UserController {
  constructor(private userPointsService: UserPointsService) {}

  @Get('/:user/points')
  async getPoints(@Param('user') user: string) {
    const userPoints = await this.userPointsService.findOne(user);
    return userPoints?.points ?? 0;
  }
}
