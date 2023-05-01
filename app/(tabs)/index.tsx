import { FlatList, StyleSheet, View } from 'react-native';
import tweets from '../../assets/data/tweets';
import { Tweet } from '../../components/Tweets';

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
});
