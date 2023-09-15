import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { PointTransaction } from '../entities/point-transaction.entity';
import { UserPointsService } from '../services/user-points.service';

@EventSubscriber()
export class PointTransactionSubscriber
  implements EntitySubscriberInterface<PointTransaction>
{
  constructor(
    private userPointsService: UserPointsService,
    dataSource: DataSource,
  ) {
    dataSource.subscribers.push(this);
  }

  async afterInsert(event: InsertEvent<PointTransaction>) {
    const { entity } = event;

    const userPoints = await this.userPointsService.findOne(entity.user);

    await this.userPointsService.save({
      user: entity.user,
      points: entity.points + (userPoints?.points ?? 0),
    });
  }
}
