import { IsNotEmpty, ValidateIf } from 'class-validator';
import { AvatarFrame, Product } from './product.entity';

export class CreateProductDto {
  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  points: number;

  @IsNotEmpty()
  description: string;

  @ValidateIf((e: CreateProductDto) => e.type === 'AvatarFrame')
  @IsNotEmpty()
  src: string;

  toEntity() {
    let product: Product;
    switch (this.type) {
      case 'AvatarFrame': {
        const avatarFrame = new AvatarFrame();
        avatarFrame.src = this.src;
        product = avatarFrame;
        break;
      }
      default:
        throw Error('Unknown product type: ' + this.type);
    }

    product.name = this.name;
    product.points = this.points;
    product.description = this.description;

    return product;
  }
}
