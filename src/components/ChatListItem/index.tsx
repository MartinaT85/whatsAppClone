import React from "react";
import { Text, View, Image } from "react-native";
import { styles } from "./index.styles";
import { IChatListItemsProps } from "./chatListItemsTypes";

const ChatListItem: React.FC<IChatListItemsProps> = ({ chat }) => {
  const now = new Date();
  const createdAt = new Date(chat.lastMessage.createdAt);
  const diff = now.getTime() - createdAt.getTime();
  const minutesAgo = Math.floor(diff / (1000 * 60));
  const hoursAgo = Math.floor(diff / (1000 * 60 * 60));
  const daysAgo = Math.floor(diff / (1000 * 60 * 60 * 24));

  let timeAgo: string;

  if (minutesAgo < 60) {
    timeAgo = `${minutesAgo} minutes ago`;
  } else if (hoursAgo < 24) {
    timeAgo = `${hoursAgo} hours ago`;
  } else if (daysAgo < 7) {
    timeAgo = `${daysAgo} days ago`;
  } else {
    timeAgo = createdAt.toLocaleDateString();
  }

  return (
    <View
      style={styles.container}
      accessible={true}
      accessibilityLabel={`Chat with ${chat.user.name}`}
      accessibilityRole="button"
      accessibilityHint="Tap to open chat"
    >
      <Image
        source={{
          uri: chat.user.image,
        }}
        style={styles.image}
        accessible={true}
        accessibilityLabel={`${chat.user.name}'s profile picture`}
        accessibilityRole="image"
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text
            style={styles.name}
            numberOfLines={1}
            accessible={true}
            accessibilityLabel={`${chat.user.name}`}
            accessibilityRole="text"
          >
            {chat.user.name}
          </Text>
          <Text
            style={styles.secondaryTxt}
            accessible={true}
            accessibilityLabel={`Time of last message`}
            accessibilityRole="text"
          >
            {timeAgo}
          </Text>
        </View>
        <Text
          style={styles.secondaryTxt}
          numberOfLines={2}
          accessible={true}
          accessibilityLabel="Last message"
          accessibilityRole="text"
        >
          {chat.lastMessage.text}
        </Text>
      </View>
    </View>
  );
};

export default ChatListItem;
