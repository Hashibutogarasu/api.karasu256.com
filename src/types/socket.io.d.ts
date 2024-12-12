import { User } from '@supabase/supabase-js';
import { Socket } from 'socket.io';

declare module 'socket.io' {
  interface Socket {
    authorized: boolean;
    user: User | null;
  }
}