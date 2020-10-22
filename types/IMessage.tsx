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
