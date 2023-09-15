import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class UserPoints {
  @PrimaryColumn()
  user: string;

  @Column()
  points: number;
}
