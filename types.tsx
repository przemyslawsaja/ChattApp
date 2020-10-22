export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Rooms: undefined;
  Chat: undefined;
};

export type TabOneParamList = {
  RoomListScreen: undefined;
};

export type TabTwoParamList = {
  ChatScreen: undefined;
};

export type IMessage =  Array<{
  _id: String,
  text: string,
  createdAt: number,
  user: {
    _id: number,
    name: string,
    avatar: string,
  }
}>

export interface IChatRoom {
  id: String;
  name: string;
  navigation: object
};
//TODO: find out how to declare args type in map method
export interface IRoom {
  room:{
    messages: {
      map: ({}) => void
    }
  }
}

export interface IRoomList {
  navigation: object
}

export interface IChatScreen {
  route: {
    params: {
      id: string
    }
  }; 
}

