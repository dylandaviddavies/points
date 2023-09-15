import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserProduct } from './user-product.entity';

@Injectable()
export class UserProductService {
  constructor(
    @InjectRepository(UserProduct)
    private userProductRepository: Repository<UserProduct>,
  ) {}

  findOne(user: string, product_id: number): Promise<UserProduct | null> {
    return this.userProductRepository.findOneBy({ user, product_id });
  }

  findAll(): Promise<UserProduct[]> {
    return this.userProductRepository.find();
  }

  async save(userProduct: UserProduct) {
    return await this.userProductRepository.save(userProduct);
  }
}
