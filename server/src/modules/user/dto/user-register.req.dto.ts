import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';
import { MESSAGES, REGEX } from 'src/app.utils';
import { ApiProperty } from '@nestjs/swagger';


export class UserRegisterRequestDto {
  @ApiProperty({
    description: "name of user",
    example: "Jc coder"
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: "email of user",
    example: "joseph@gmail.com"
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: "password of user",
    example: "Jccoder@1234"
  })
  @IsNotEmpty()
  @Length(8, 24)
  @Matches(REGEX.PASSWORD_RULE, {
    message: MESSAGES.PASSWORD_RULE_MESSAGE,
  })
  password: string;




  @ApiProperty({
    description: "confirm password of user",
    example: "Jccoder@1234"
  })
  @IsNotEmpty()
  @Length(8, 24)
  @Matches(REGEX.PASSWORD_RULE, { message: MESSAGES.PASSWORD_RULE_MESSAGE })
  confirm: string;
}
