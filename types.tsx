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

export type ChatRoom = {
  id: String;
  name: string;
}

export type Message = {
  id: String;
  content: string;
  createdAt: number;
}