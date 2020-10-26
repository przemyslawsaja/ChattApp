interface Room {
  name: string,
  id: string,
}
export interface IUserRoomsData {
  usersRooms: {
    rooms: Room[]
  }
}