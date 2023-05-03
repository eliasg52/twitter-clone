import { StyleSheet, Text, Image, TextInput, Pressable } from 'react-native';
import { View } from '../components/Themed';
import tweets from '../assets/data/tweets';
import { useNavigation } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NewTweet() {
  const image = tweets[0].user.image;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Text style={{ fontSize: 16 }} onPress={() => navigation.goBack()}>
            Cancel
          </Text>
          <Pressable onPress={() => navigation.goBack()} style={styles.button}>
            <Text style={styles.textButton}>Tweet</Text>
          </Pressable>
        </View>
        <View style={styles.inputContainer}>
          <Image src={image} style={styles.userImage}></Image>
          <TextInput
            style={{ flex: 1 }}
            placeholder="Whats up"
            multiline
            numberOfLines={3}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  button: {
    backgroundColor: 'royalblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
  },
  textButton: {
    fontWeight: '500',
    color: 'white',
  },
});
