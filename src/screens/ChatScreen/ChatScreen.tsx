import { View, ImageBackground, SafeAreaView, FlatList } from "react-native";
import BG from "../../../assets/images/BG.png";
import Message from "../../components/Message";
import messagesData from "../../../assets/data/messages.json";
import { useState } from "react";
import { IMessage } from "../../components/Message/messageTypes";
import { styles } from "./chatScreen.styles";
// const BG = require("../../../assets/images/BG.png");

const ChatScreen = () => {
  const [messages] = useState<IMessage[]>(messagesData);
  return (
    <ImageBackground source={BG} style={styles.bg}>
      <SafeAreaView>
        <View style={styles.container}>
          <FlatList
            data={messages}
            renderItem={({ item }) => <Message message={item} />}
            keyExtractor={(item) => item.id}
            style={styles.list}
            inverted
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ChatScreen;
