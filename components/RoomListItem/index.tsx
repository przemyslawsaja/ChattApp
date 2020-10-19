import React, { FC } from 'react'; 
import { Text, View } from '../Themed';
import { ChatRoom } from '../../types'
import styles from './style'

const RoomListItem:FC<ChatRoom> = ({id, name}) => {
  return (
    <View style={styles.view}>
        <Text>{name}</Text>
    </View>
  )
}

export default RoomListItem;