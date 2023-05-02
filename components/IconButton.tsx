import { StyleSheet, Text, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { IconButtonI } from '../interfaces/interfaces';

export const IconButton = ({ icon, text }: IconButtonI) => {
  return (
    <View style={styles.iconFooter}>
      <EvilIcons name={icon} size={22} color="grey" />
      <Text style={{ fontSize: 12, color: 'grey' }}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
});
