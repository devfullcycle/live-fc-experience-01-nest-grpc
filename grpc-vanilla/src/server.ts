import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { join } from "path";
import { ProtoGrpcType } from "./rpc/chat";
import { ChatServiceHandlers } from "./rpc/chat_package/ChatService";

const packageDefinition = protoLoader.loadSync(join(__dirname, "chat.proto"));

const proto = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

const handlers: ChatServiceHandlers = {
  Chat: (call, callback) => {
    const { chatId, message } = call.request;
    callback(null, {
      id: chatId,
      answer: {
        id: 1,
        message: message,
        createdAt: new Date().toISOString(),
      },
      createdAt: new Date().toISOString(),
    });
  },
  ChatStream: (call) => {
    const randomNumbers = Array.from({ length: 20 }, () =>
      Math.floor(Math.random() * 100)
    );
    const { chatId, message } = call.request;
    randomNumbers.forEach((number, key) => {
      setTimeout(() => {
        call.write({
          id: chatId,
          answer: {
            id: number,
            message: message,
            createdAt: new Date().toISOString(),
          },
          createdAt: new Date().toISOString(),
        });
      }, key * 1000);
    });
  },
};

const server = new grpc.Server();
server.addService(proto.chat_package.ChatService.service, handlers);

server.bindAsync(
  "0.0.0.0:5000",
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Server running at http://localhost:5000`);
    server.start();
  }
);
