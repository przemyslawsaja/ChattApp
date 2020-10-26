import React, {FC} from 'react';
import { View } from 'react-native'
import { Text } from '../components/Themed';
import { useQuery } from '@apollo/client';
import { IRoomList } from '../types/IRoomList'
import { LIST_USER_ROOMS } from '../graphql/queries'
import { IUserRoomsData } from '../types/IUserRooms'
import RoomListItem from '../components/RoomListItem/index'

const RoomListScreen:FC<IRoomList> = ({navigation}) => {
  const { loading, error, data } = useQuery<IUserRoomsData>(LIST_USER_ROOMS);
  
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;
  //TODO: rework on flatlist
    return (
        <View>
          {(data !=undefined) &&  data.usersRooms.rooms.map(({ name, id }) => (
          <RoomListItem id={id} name={name} navigation={navigation}/>))}
        </View>
    )
}
export default RoomListScreen;

