import { Inject, Injectable } from "@nestjs/common";
import { SupabaseClient, User } from "@supabase/supabase-js";
import { Server, Socket } from "socket.io";

@Injectable()
export class EventsService {
  constructor(@Inject("SUPABASE_CLIENT") private readonly supabase: SupabaseClient) {}
  private server: Server;

  async onVerifyClient(socket: Socket, user: User) {
    if (socket.authorized) {
      console.log("User connected:", user.email);
    }
  }

  async userExists(socket: Socket): Promise<boolean> {
    const token = socket.handshake.headers.authorization.split(" ")[1];
    const { data } = await this.supabase.auth.getUser(token);
    return data !== null;
  }

  async verifyClient(socket: Socket, next: () => void) {
    socket.authorized = false;

    if (socket.handshake.headers.authorization === undefined) {
      this.unAuthorized(socket);
      next();
      return;
    }

    const token = socket.handshake.headers.authorization.split(" ")[1];

    if (!token) {
      this.unAuthorized(socket);
      next();
      return;
    }

    const { data } = await this.supabase.auth.getUser(token);

    if (!data.user) {
      this.unAuthorized(socket);
      next();
      return;
    }

    socket.authorized = true;
    socket.user = data.user;
    this.onVerifyClient(socket, data.user);
    next();
  }

  unAuthorized(socket: Socket): Server {
    socket.disconnect();
    socket.authorized = false;

    return this.server;
  }

  disconnectPreviouslyConnectedSocket(socket: Socket, next: () => void) {
    next();
  }

  setServer(server: Server) {
    this.server = server;
  }
}
