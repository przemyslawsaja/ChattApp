export interface IChatRoom {
  id: String;
  name: string;
  navigation: {
    navigate: (route: string, routeID: {
      id: String
    }) => void
  }
};