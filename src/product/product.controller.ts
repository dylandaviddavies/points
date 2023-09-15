import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './create-product.dto';

@Controller('/product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  post(@Body() createProductDto: CreateProductDto) {
    const product = createProductDto.toEntity();
    return this.productService.save(product);
  }

  @Get()
  get() {
    return this.productService.findAll();
  }
}
