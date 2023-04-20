import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { join } from 'path';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { GrpcClientService } from '../src/grpc-client/grpc-client.service';

describe('Grpc Server', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.connectMicroservice<MicroserviceOptions>({
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:5000',
        package: 'chat_package',
        protoPath: join(__dirname, '..', 'src', 'proto', 'chat.proto'),
      },
    });

    await app.init();
    await app.startAllMicroservices();
  });

  test('call chat', async () => {
    const chatService = app.get<GrpcClientService>(GrpcClientService);
    try {
      const result = await chatService.chat({
        chatId: 1,
        message: 'aaaaaaaaaaaaaaaa',
      });
      console.log(result);
    } catch (e) {
      console.error(e);
    }
  });
});

//protobuf //default values
