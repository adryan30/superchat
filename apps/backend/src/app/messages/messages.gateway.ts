import {
  SubscribeMessage,
  WebSocketGateway,
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';

@WebSocketGateway(4000)
export class MessagesGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() wss: Server;

  private logger = new Logger(MessagesGateway.name);

  afterInit() {
    this.logger.log('MessagesGateway initialized');
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`${client.id} connected`);
    this.wss.emit('userJoin', client.id);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`${client.id} disconnected`);
    this.wss.emit('userLeft', client.id);
  }

  @SubscribeMessage('msgToServer')
  handleMessage(_: Socket, payload: { user: string; message: string }): void {
    this.wss.emit('msgToClient', payload);
=======
=======
>>>>>>> Stashed changes
  MessageBody,
} from '@nestjs/websockets';

@WebSocketGateway(3334, { namespace: 'messages' })
export class MessagesGateway {
  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: { message: string }) {
    return data;
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  }
}
