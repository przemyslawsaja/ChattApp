import { gql } from '@apollo/client';

export const GET_ROOM_MESSAGES = gql`
  query ($RoomID: String!){
    room(id: $RoomID){
      messages{
        body
        id
        insertedAt
      }
      user {
        id
        firstName
      }
    }
  }
  `;
export const SEND_MESSAGE = gql`
  mutation ($RoomID: String!){
  sendMessage(body:"exmaple message", roomId: $RoomID){
    body
    insertedAt
    id
    user {
      id
    }
  }
}
`
export const LIST_USER_ROOMS = gql`
    {
      usersRooms{
        rooms{
          name
          id
        }
      }
    }
  `;