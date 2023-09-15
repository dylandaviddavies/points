import { IsEmail, IsNotEmpty } from 'class-validator';
import { PointTransaction } from './point-transaction.entity';

export class CreatePointTransactionDto {
  @IsEmail()
  user: string;

  @IsNotEmpty()
  points: number;

  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  description: string;

  toEntity() {
    const pointTransaction = new PointTransaction();

    pointTransaction.user = this.user;
    pointTransaction.points = this.points;
    pointTransaction.type = this.type;
    pointTransaction.description = this.description;

    return pointTransaction;
  }
}
