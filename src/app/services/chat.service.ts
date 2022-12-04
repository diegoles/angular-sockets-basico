import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(public websocketService: WebsocketService) { }

  sendMenssage(mensaje: string) {
    const payload = {
      de: 'Edgar',
      cuerpo: mensaje
    }
    this.websocketService.emit('mensaje', payload);
  }

  getMessage() {
    return this.websocketService.listen('mensaje-nuevo');
  }
}
