import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { PointTransaction } from './point-transaction.entity';
import { UserPoints } from '../user-points/user-points.entity';

@EventSubscriber()
export class PointTransactionSubscriber
  implements EntitySubscriberInterface<PointTransaction>
{
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  async afterInsert(event: InsertEvent<PointTransaction>) {
    const { entity, manager } = event;

    const userPointsRepository = await manager.getRepository(UserPoints);

    const userPoints = await userPointsRepository.findOneBy({
      user: entity.user,
    });

    await userPointsRepository.save({
      user: entity.user,
      points: entity.points + (userPoints?.points ?? 0),
    });
  }
}
