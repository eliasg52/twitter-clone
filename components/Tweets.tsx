import { Image, StyleSheet, Text, View } from 'react-native';
import { TweetI } from '../interfaces/interfaces';

export const Tweet = ({ tweet }: TweetI) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: tweet.user.image }} style={styles.userImage} />
      <View style={styles.mainContainer}>
        <Text style={styles.userName}>{tweet.user.name}</Text>
        <Text style={styles.userContent}>{tweet.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    backgroundColor: 'white',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  mainContainer: {
    flex: 1,
    marginLeft: 10,
  },
  userName: {
    fontWeight: 'bold',
  },
  userContent: {
    lineHeight: 20,
  },
});
