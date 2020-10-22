import React, { FC } from 'react'; 
import { Text, View } from '../Themed';
import { IChatRoom } from '../../types/IChatRoom'
import styles from './style'
import { Button } from 'react-native';

const RoomListItem:FC<IChatRoom> = ({id, name, navigation}) => {
  return (
    <View style={styles.view}>
      <Text>{name}</Text>
      <Button
        title={"JOIN CHAT"}
        onPress={() => navigation.navigate('Chat',{ id: id })}
      />
    </View>

  )
}

export default RoomListItem;
