import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ChatServiceClient as _chat_package_ChatServiceClient, ChatServiceDefinition as _chat_package_ChatServiceDefinition } from './chat_package/ChatService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  chat_package: {
    ChatRequest: MessageTypeDefinition
    ChatResponse: MessageTypeDefinition
    ChatService: SubtypeConstructor<typeof grpc.Client, _chat_package_ChatServiceClient> & { service: _chat_package_ChatServiceDefinition }
  }
}

