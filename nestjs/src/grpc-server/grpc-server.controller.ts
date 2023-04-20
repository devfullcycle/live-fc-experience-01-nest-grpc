import {
  Body,
  Controller,
  UseFilters,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AuthGuard } from '../auth/auth.guard';
import { ChatDto } from '../chat.dto';
import { ValidationExceptionFilter } from '../validation.expcetion-filter';


@UseFilters(new ValidationExceptionFilter())
@UseGuards(AuthGuard)
@Controller('grpc-server')
export class GrpcServerController {
  @GrpcMethod('ChatService', 'Chat')
  chat(@Body(new ValidationPipe()) data: ChatDto, metadata, call) {
    console.log(data);
    return {
      id: 1,
      answer: {
        id: 1,
        message: '',
        createdAt: new Date().toISOString(),
      },
      createdAt: new Date().toISOString(),
    };
  }
}
