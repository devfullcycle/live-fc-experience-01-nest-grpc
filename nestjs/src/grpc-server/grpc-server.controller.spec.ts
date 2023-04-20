import { Test, TestingModule } from '@nestjs/testing';
import { GrpcServerController } from './grpc-server.controller';

describe('GrpcServerController', () => {
  let controller: GrpcServerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GrpcServerController],
    }).compile();

    controller = module.get<GrpcServerController>(GrpcServerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
