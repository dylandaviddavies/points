import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { UserProduct } from './user-product.entity';
import { Product } from '../product/product.entity';
import { PointTransaction } from '../point-transaction/point-transaction.entity';

@EventSubscriber()
export class UserProductSubscriber
  implements EntitySubscriberInterface<UserProduct>
{
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  async afterInsert(event: InsertEvent<UserProduct>) {
    const { entity, manager } = event;

    const productRepository = await manager.getRepository(Product);

    const product = await productRepository.findOneBy({
      id: entity.product_id,
    });

    await manager.getRepository(PointTransaction).save({
      user: entity.user,
      points: -product.points,
      description: 'Purchased product.',
      type: 'Purchase',
    });
  }
}
