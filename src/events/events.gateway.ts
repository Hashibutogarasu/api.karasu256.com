import { Logger, OnModuleInit } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { EventsService } from './events.service';

type Client = {
  socket: Socket;
  tokenCheck: NodeJS.Timeout;
}


@WebSocketGateway()
export class EventsGateway implements OnModuleInit {
  constructor(
    private readonly eventsService: EventsService,
  ) { }

  private logger = new Logger('EventsGateway');
  private clients: Client[] = [];

  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.logger.log('Events Gateway Initialized');
  }

  afterInit(server: Server) {
    this.server.use(this.eventsService.verifyClient.bind(this.eventsService));
    this.server.use(this.eventsService.disconnectPreviouslyConnectedSocket.bind(this.eventsService));
    this.eventsService.setServer(server);
  }

  handleConnection(socket: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${socket.id}`);

    const tokenCheck = setInterval(() => {
      if (!this.eventsService.userExists(socket)) {
        socket.emit('authState', {
          msg: 'Not Authenticated',
        });
        socket.disconnect(true);
      }
    }, 60000);

    this.clients.push({ socket, tokenCheck });
  }

  handleDisconnect(socket: Socket) {
    this.logger.log(`Client disconnected: ${socket.id}`);
    const client = this.clients.find((client) => client.socket === socket);

    if (client) {
      clearInterval(client.tokenCheck);
      this.clients = this.clients.filter((client) => client.socket !== socket);
    }
  }

  @SubscribeMessage('newMessage')
  onnewMessage(@ConnectedSocket() socket: Socket, @MessageBody() body: any) {
    this.clients.forEach((client) => {
      if (socket.user) {
        client.socket.emit('onMessage', {
          user: socket.user?.user_metadata.name || 'Anonymous',
          content: body,
        });
      }
      else {
        client.socket.emit('error', {
          message: 'Not Authenticated',
        });
      }
    });
  }
}
