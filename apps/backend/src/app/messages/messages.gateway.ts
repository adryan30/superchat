import {
  SubscribeMessage,
  WebSocketGateway,
  MessageBody,
} from '@nestjs/websockets';

@WebSocketGateway(3334, { namespace: 'messages' })
export class MessagesGateway {
  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: { message: string }) {
    return data;
  }
}
