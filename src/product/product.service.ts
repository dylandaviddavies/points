import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  findOne(id: number): Promise<Product | null> {
    return this.productRepository.findOneBy({ id });
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async save(product: Product) {
    return await this.productRepository.save(product);
  }

  async remove(id: string): Promise<void> {
    await this.productRepository.delete(id);
  }
}
