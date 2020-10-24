import React, { FC, useState, useCallback, useEffect } from 'react'
import { Text } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import { IChatScreen } from '../types/IChatScreen'
import { IMessage } from '../types/IMessage'
import { IRoom } from '../types/IRoom'
import { useQuery, useMutation } from '@apollo/client';
import { GET_ROOM_MESSAGES, SEND_MESSAGE, GET_CURRENT_USER_ID } from '../graphql/queries'

const ChatScreen:FC<IChatScreen> = ({route}) => {

  const { id:RoomID} = route.params
  const { loading, error, data:CurrentRoom,} = useQuery<IRoom>(GET_ROOM_MESSAGES, { variables: { RoomID } });
  const [sendMessage, { data }] = useMutation(SEND_MESSAGE, { variables: { RoomID, Text} });
  const { data:LoggedUser,} = useQuery(GET_CURRENT_USER_ID);
  const [messages, setMessages] = useState<IMessage>([]);

      useEffect(() => {
        if (CurrentRoom != undefined) {
          CurrentRoom.room.messages.map(({body, id, insertedAt, user}) => {
            setMessages(messages => [...messages, {
              _id: id,
              text: body,
              createdAt: insertedAt,
              user: {
                _id: user.id,
                name: user.firstname,
                avatar: 'https://placeimg.com/140/140/any',
                }
            }])
          })
        }
        
    }, [CurrentRoom])
    

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
    sendMessage({ variables: { RoomID: RoomID, Text: messages[0].text}});
  }, [])
  
    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error :(</Text>;

    return (
    <>
      {console.log("state:")}  
      {console.log(messages)}
      {console.log("db:")}
      {console.log(CurrentRoom)}
      {LoggedUser != undefined && <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: LoggedUser.user.id,
        }}
      />}    
    </>
    )
}

export default ChatScreen;
