import React from "react";
import { Text, View, Image } from "react-native";
import { styles } from "./index.styles";

type ChatListItemProps = {
  chat: {
    id: string;
    user: {
      image: string;
      name: string;
    };
    lastMessage: {
      text: string;
      createdAt: string;
    };
  };
};

const ChatListItem: React.FC<ChatListItemProps> = ({ chat }) => {
  const name: string = "Lucas";
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
            accessibilityLabel={`${name}`}
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
            {chat.lastMessage.createdAt}
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
