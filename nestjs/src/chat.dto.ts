import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class ChatDto {
  @IsNotEmpty()
  @IsNumber()
  chatId: number;

  @IsNotEmpty()
  @IsString()
  //@MaxLength(1)
  message: string;
}
