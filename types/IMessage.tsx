export interface IMessage {
  _id: String,
  text: string,
  createdAt: string,
  user: {
    _id: string,
    name: string,
    avatar: string,
    },
}
