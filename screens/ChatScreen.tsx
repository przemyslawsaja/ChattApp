import React, { FC, useState, useCallback, useEffect } from 'react'
import { Text } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import { IChatScreen } from '../types'
import { useQuery, gql, useMutation, from } from '@apollo/client';
import { IMessage, IRoom} from '../types'
import { GET_ROOM_MESSAGES, SEND_MESSAGE } from '../graphql/queries'

const ChatScreen:FC<IChatScreen> = ({route}) => {

  const { id:RoomID} = route.params
  const { loading, error, data:RoomData,} = useQuery<IRoom>(GET_ROOM_MESSAGES, { variables: { RoomID } });
  const [sendMessage, { data }] = useMutation(SEND_MESSAGE, { variables: { RoomID } });
  const [messages, setMessages] = useState<IMessage>([]);

      useEffect(() => {
        if (RoomData != undefined) {
          RoomData.room.messages.map(({body, id, insertedAt}) => {
            setMessages([
              {
                _id: id,
                text: body,
                createdAt: insertedAt,
                user: {
                  _id: 2,
                  name: 'React Native',
                  avatar: 'https://placeimg.com/140/140/any',
                },
              },
            ])
          })
        }
    }, [RoomData])


  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
    sendMessage({ variables: { RoomID: RoomID} });
    //TODO: catch body string from typed message ^
  }, [])
  

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error :(</Text>;

    return (
      <>
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      </>
    )
}

export default ChatScreen;
