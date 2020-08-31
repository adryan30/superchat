import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesGateway } from './messages.gateway';

@Module({
  controllers: [MessagesController],
<<<<<<< Updated upstream
  providers: [MessagesService, MessagesGateway],
=======
  providers: [MessagesService, MessagesGateway]
>>>>>>> Stashed changes
})
export class MessagesModule {}
