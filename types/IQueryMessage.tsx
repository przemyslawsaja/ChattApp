export interface IQueryMessage{
  body: string,
  id: String,
  insertedAt: string,
  user: {
    id: string,
    firstName: string,
  }
}