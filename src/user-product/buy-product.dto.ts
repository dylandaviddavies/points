import { IsNotEmpty } from 'class-validator';
import { UserProduct } from './user-product.entity';

export class BuyProductDto {
  @IsNotEmpty()
  user: string;

  @IsNotEmpty()
  product_id: number;

  toEntity() {
    const userProduct = new UserProduct();

    userProduct.product_id = this.product_id;
    userProduct.user = this.user;

    return userProduct;
  }
}
