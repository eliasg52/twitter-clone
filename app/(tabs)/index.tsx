import { FlatList, StyleSheet, View, Text, Pressable } from 'react-native';
import tweets from '../../assets/data/tweets';
import { Tweet } from '../../components/Tweets';
import { Link } from 'expo-router';
import { Entypo } from '@expo/vector-icons';

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      ></FlatList>
      <Link href={'/new-tweet'} asChild style={styles.floatingButton}>
        <Entypo name="plus" size={24} color="white" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  floatingButton: {
    position: 'absolute',
    backgroundColor: 'cyan',
    bottom: 10,
    right: 10,
    borderRadius: 50,
    padding: 10,
  },
});
