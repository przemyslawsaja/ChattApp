import React, {FC} from 'react';
import { Text } from '../components/Themed';
import { useQuery, gql } from '@apollo/client';
import { IRoomList } from '../types'
import RoomListItem from '../components/RoomListItem/index'
import { LIST_USER_ROOMS } from '../graphql/queries'

const RoomListScreen:FC<IRoomList> = ({navigation}) => {
  const { loading, error, data } = useQuery(LIST_USER_ROOMS);
  //TODO: add Data Interface
  
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;
    
  return data.usersRooms.rooms.map(({ name, id }) => (
    <div key={id}>
      <RoomListItem id={id} name={name} navigation={navigation}/>
    </div>
  ));
}
export default RoomListScreen;
