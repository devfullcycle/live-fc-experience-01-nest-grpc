import { Metadata } from '@grpc/grpc-js';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable, lastValueFrom } from 'rxjs';

interface ChatService {
  chat(
    data: { chatId: number; message: string },
    metadata: Metadata,
  ): Observable<any>;
}

@Injectable()
export class GrpcClientService implements OnModuleInit {
  private chatService: ChatService;
  constructor(@Inject('CHAT_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.chatService = this.client.getService('ChatService');
  }

  chat(data: { chatId: number; message: string }): Promise<any> {
    const metadata = new Metadata();
    metadata.set('authorization', '1234');
    return lastValueFrom(this.chatService.chat(data, metadata));
  }
}

// this.chatService.chatStream().pipe).subscribe({
//   next: (value) => console.log(value),
//   error: (err) => console.error(err),
//   complete: () => console.log('complete'),
// })
