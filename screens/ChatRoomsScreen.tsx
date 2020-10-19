import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Text, View } from '../components/Themed';
import RoomListItem from '../components/RoomListItem/index'

const RoomsData = [
  {id: '1', name: "The one with Pheobe's recruitment task" },
  {id: '2', name: "The one with article for Pheobe" },
  {id: '3', name: "Reachel's room" },
]
export default function ChatRoomsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={RoomsData} 
        renderItem={({ item }) => <RoomListItem id={item.id} name={item.name}/>}
        keyExtractor={(item) => item.id} 
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
