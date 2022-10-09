import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'users' })
export class User {
  @ApiProperty({description: "Primary key as user id", example: 1})
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({description: "user name", example: 'Joseph'})
  @Column()
  name: string;

  @ApiProperty({description: "User email", example: 'joseph@gmail.com'})
  @Column({ unique: true })
  email: string;

  @ApiProperty({description: "Hashed User password", example: 'string'})
  @Column()
  password: string;

  @Column()
  role: string;

  @ApiProperty({description: 'When user was created'})
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({description: 'When user was updated'})
  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  async setPassword(password: string){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt)
  }

}
