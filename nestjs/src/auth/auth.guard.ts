import { Metadata } from '@grpc/grpc-js';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { status } from '@grpc/grpc-js';
@Injectable()
export class AuthGuard implements CanActivate {
  // constructor(private jwtService: JwtService){

  // }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const metadata: Metadata = context.switchToRpc().getContext();
    const token = metadata.get('authorization')[0];
    if (token === '1234') {
      //this.jwtService.verify(token))
      return true;
    }

    throw new RpcException({
      message: 'Unauthenticated',
      code: status.UNAUTHENTICATED,
    });
  }
}
