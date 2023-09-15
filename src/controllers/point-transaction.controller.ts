import { Body, Controller, Post } from '@nestjs/common';
import { CreatePointTransactionDto } from '../models/create-point-transaction.dto';
import { PointTransactionService } from '../services/point-transaction.service';

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
