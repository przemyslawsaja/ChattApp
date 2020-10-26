import { IQueryMessage } from './IQueryMessage'

export interface IRoomData {
  room: {
    messages: IQueryMessage[];
  }
}

export interface IRoomVars {
  RoomID: String;
}

