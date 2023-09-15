import {
  AfterInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class PointTransaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user: string;

  @Column()
  points: number;

  @Column()
  type: string;

  @Column()
  description: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;
}
