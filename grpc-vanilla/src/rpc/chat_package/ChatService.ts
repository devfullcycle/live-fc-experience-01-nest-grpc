// Original file: src/chat.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ChatRequest as _chat_package_ChatRequest, ChatRequest__Output as _chat_package_ChatRequest__Output } from '../chat_package/ChatRequest';
import type { ChatResponse as _chat_package_ChatResponse, ChatResponse__Output as _chat_package_ChatResponse__Output } from '../chat_package/ChatResponse';

export interface ChatServiceClient extends grpc.Client {
  Chat(argument: _chat_package_ChatRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_package_ChatResponse__Output>): grpc.ClientUnaryCall;
  Chat(argument: _chat_package_ChatRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_package_ChatResponse__Output>): grpc.ClientUnaryCall;
  Chat(argument: _chat_package_ChatRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_package_ChatResponse__Output>): grpc.ClientUnaryCall;
  Chat(argument: _chat_package_ChatRequest, callback: grpc.requestCallback<_chat_package_ChatResponse__Output>): grpc.ClientUnaryCall;
  chat(argument: _chat_package_ChatRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_package_ChatResponse__Output>): grpc.ClientUnaryCall;
  chat(argument: _chat_package_ChatRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_chat_package_ChatResponse__Output>): grpc.ClientUnaryCall;
  chat(argument: _chat_package_ChatRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_chat_package_ChatResponse__Output>): grpc.ClientUnaryCall;
  chat(argument: _chat_package_ChatRequest, callback: grpc.requestCallback<_chat_package_ChatResponse__Output>): grpc.ClientUnaryCall;
  
  ChatStream(argument: _chat_package_ChatRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_package_ChatResponse__Output>;
  ChatStream(argument: _chat_package_ChatRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_package_ChatResponse__Output>;
  chatStream(argument: _chat_package_ChatRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_package_ChatResponse__Output>;
  chatStream(argument: _chat_package_ChatRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_package_ChatResponse__Output>;
  
}

export interface ChatServiceHandlers extends grpc.UntypedServiceImplementation {
  Chat: grpc.handleUnaryCall<_chat_package_ChatRequest__Output, _chat_package_ChatResponse>;
  
  ChatStream: grpc.handleServerStreamingCall<_chat_package_ChatRequest__Output, _chat_package_ChatResponse>;
  
}

export interface ChatServiceDefinition extends grpc.ServiceDefinition {
  Chat: MethodDefinition<_chat_package_ChatRequest, _chat_package_ChatResponse, _chat_package_ChatRequest__Output, _chat_package_ChatResponse__Output>
  ChatStream: MethodDefinition<_chat_package_ChatRequest, _chat_package_ChatResponse, _chat_package_ChatRequest__Output, _chat_package_ChatResponse__Output>
}
