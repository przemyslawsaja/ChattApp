import { gql } from '@apollo/client';

export const GET_ROOM_MESSAGES = gql`
  query ($RoomID: String!){
    room(id: $RoomID){
      messages{
        body
        id
        insertedAt
        user {
          id
          firstName
        }
      }
    }
  }
  `;
export const SEND_MESSAGE = gql`
  mutation ($RoomID: String, $Text:String){
  sendMessage(roomId: $RoomID, body: $Text){
    body
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

export const GET_CURRENT_USER_ID = gql`
{
  user{
    id
  }
}
`