import { Body, Controller, Post } from '@nestjs/common';
import { BuyProductDto } from './buy-product.dto';
import { UserProductService } from './user-product.service';

@Controller('/user/product')
export class UserProductController {
  constructor(private userProductService: UserProductService) {}

  @Post()
  post(@Body() buyProductDto: BuyProductDto) {
    return this.userProductService.save(buyProductDto.toEntity());
  }
}
