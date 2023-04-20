import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GrpcServerController } from './grpc-server/grpc-server.controller';
import { GrpcClientService } from './grpc-client/grpc-client.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AuthGuard } from './auth/auth.guard';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CHAT_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:5000',
          package: 'chat_package',
          protoPath: join(__dirname, 'proto', 'chat.proto'),
        },
      },
    ]),
  ],
  controllers: [AppController, GrpcServerController],
  providers: [AppService, GrpcClientService, AuthGuard],
})
export class AppModule {}
