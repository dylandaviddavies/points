import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserPoints } from '../entities/user-points.entity';

@Injectable()
export class UserPointsService {
  constructor(
    @InjectRepository(UserPoints)
    private userPointsRepository: Repository<UserPoints>,
  ) {}

  findOne(user: string): Promise<UserPoints | null> {
    return this.userPointsRepository.findOneBy({ user });
  }

  async save(userPoints: UserPoints) {
    return await this.userPointsRepository.save(userPoints);
  }

  async remove(user: string): Promise<void> {
    await this.userPointsRepository.delete(user);
  }
}
