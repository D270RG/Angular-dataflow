import { EventEmitter, Injectable } from '@angular/core';

export interface CustomMessage {
  message: string;
}
export interface CustomError {
  error: string;
}

@Injectable({
  providedIn: 'root',
})
export class CustomService {
  public onChange: EventEmitter<CustomMessage | CustomError> =
    new EventEmitter();

  public sendMessage(message: string) {
    this.onChange.emit({ message: message });
  }
  public sendError(errorMessage: string) {
    this.onChange.emit(new Error(errorMessage));
  }
}
