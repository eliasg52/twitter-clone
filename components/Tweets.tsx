import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import { TweetI } from '../interfaces/interfaces';
import { Entypo } from '@expo/vector-icons';
import { IconButton } from './IconButton';
import { Link } from 'expo-router';

export const Tweet = ({ tweet }: TweetI) => {
  console.log('tweet', tweet.id);
  return (
    <Link href={`/tweet/${tweet.id}`} asChild>
      <Pressable style={styles.container}>
        <Image source={{ uri: tweet.user.image }} style={styles.userImage} />
        <View style={styles.mainContainer}>
          <View style={{ flexDirection: 'row', gap: 5 }}>
            <Text style={styles.userName}>{tweet.user.name}</Text>
            <Text style={styles.userTwName}>@{tweet.user.username} · 13h</Text>
            <Entypo
              name="dots-three-horizontal"
              size={20}
              color="grey"
              style={{ marginLeft: 'auto' }}
            />
          </View>
          <Text style={styles.userContent}>{tweet.content}</Text>
          {tweet.image ? (
            <Image style={styles.tweetImage} src={tweet.image}></Image>
          ) : null}
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <IconButton text={tweet.numberOfComments} icon="comment" />
            <IconButton text={tweet.numberOfRetweets} icon="retweet" />
            <IconButton text={tweet.numberOfLikes} icon="heart" />
            <IconButton text={tweet.impressions || 0} icon="chart" />
            <IconButton icon="share-apple" />
          </View>
        </View>
      </Pressable>
    </Link>
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
    marginBottom: 5,
  },
  tweetImage: {
    aspectRatio: 16 / 9,
    marginVertical: 6,
  },
  userTwName: {
    color: 'grey',
  },
});
