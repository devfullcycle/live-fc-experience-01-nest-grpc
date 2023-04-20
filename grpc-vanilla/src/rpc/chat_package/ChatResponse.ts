// Original file: src/chat.proto


export interface _chat_package_ChatResponse_Message {
  'id'?: (number);
  'message'?: (string);
  'createdAt'?: (string);
}

export interface _chat_package_ChatResponse_Message__Output {
  'id': (number);
  'message': (string);
  'createdAt': (string);
}

export interface ChatResponse {
  'id'?: (number);
  'answer'?: (_chat_package_ChatResponse_Message | null);
  'createdAt'?: (string);
}

export interface ChatResponse__Output {
  'id': (number);
  'answer': (_chat_package_ChatResponse_Message__Output | null);
  'createdAt': (string);
}
