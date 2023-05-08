import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs, useNavigation } from 'expo-router';
import { Image, Pressable, useColorScheme } from 'react-native';

import Colors from '../../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function AvatarUser() {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.openDrawer()}>
      <Image
        src="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png"
        style={{ width: 30, aspectRatio: 1, borderRadius: 40, marginLeft: 20 }}
      ></Image>
    </Pressable>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerLeft: () => <AvatarUser />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}
