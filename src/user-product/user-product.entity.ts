import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Product } from '../product/product.entity';
import { JoinColumn } from 'typeorm';

@Entity()
export class UserProduct {
  @PrimaryColumn()
  id: number;

  @Column()
  user: string;

  @Column()
  product_id: number;

  @ManyToOne(() => Product, (product) => product.id)
  @JoinColumn({ name: 'product_id' })
  product: Product;
}
