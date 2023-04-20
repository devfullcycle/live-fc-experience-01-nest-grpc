import { status } from '@grpc/grpc-js';
import { BadRequestException, Catch, ExceptionFilter } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { throwError } from 'rxjs';

@Catch(BadRequestException)
export class ValidationExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: any) {
    const rpcException = new RpcException({
      //@ts-expect-error response has message
      message: JSON.stringify(exception.getResponse().message),
      code: status.FAILED_PRECONDITION,
    });
    return throwError(() => rpcException.getError());
  }
}
