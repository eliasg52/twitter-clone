import { Tweet } from '../../components/Tweets';
import tweets from '../../assets/data/tweets';
import { useSearchParams } from 'expo-router';
import { Text } from 'react-native';

export default function TweetScreen() {
  const { id } = useSearchParams();
  console.log(id);

  const tweet = tweets.find((item) => item.id === id);

  if (!tweet) {
    return <Text>El tweet no existe</Text>;
  }

  return <Tweet tweet={tweet} />;
}
