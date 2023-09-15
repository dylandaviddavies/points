import { Body, Controller, Post } from '@nestjs/common';
import { CreatePointTransactionDto } from './create-point-transaction.dto';
import { PointTransactionService } from './point-transaction.service';

@Controller('/point-transaction')
export class PointTransactionController {
  constructor(private pointTransactionService: PointTransactionService) {}

  @Post()
  index(@Body() createPointTransactionDto: CreatePointTransactionDto) {
    return this.pointTransactionService.save(
      createPointTransactionDto.toEntity(),
    );
  }
}
