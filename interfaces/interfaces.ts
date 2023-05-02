import { EvilIcons } from '@expo/vector-icons';

export interface TweetI {
  tweet: {
    id: string;
    content: string;
    createdAt: string;
    image?: string;
    numberOfComments?: number;
    numberOfRetweets?: number;
    numberOfLikes?: number;
    impressions?: number;
    user: {
      id: string;
      username: string;
      name: string;
      image?: string;
    };
  };
}

export interface IconButtonI {
  text?: string | number;
  icon: React.ComponentProps<typeof EvilIcons>['name'];
}
