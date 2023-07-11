import { Text, View } from "react-native";
import { styles } from "./index.styles";
import { MessageProps } from "./messageTypes";

const Message: React.FC<MessageProps> = ({ message }) => {
  const isMyMessage = () => {
    return message.user.id === "u1";
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMyMessage() ? "#dcf8c5" : "white",
          alignSelf: isMyMessage() ? "flex-end" : "flex-start",
        },
      ]}
    >
      <Text style={styles.msg}>{message.text}</Text>
    </View>
  );
};

export default Message;
