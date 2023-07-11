import { FlatList, Text, SafeAreaView } from "react-native";
import ChatListItem from "../../components/ChatListItem";
import chatsData from "../../../assets/data/chats.json";
import { IChat } from "../../components/ChatListItem/chatListItemsTypes";

const ChatsScreen = () => {
  const chats: IChat[] = chatsData;
  return (
    <SafeAreaView style={{ marginVertical: 60 }}>
      <FlatList
        ListEmptyComponent={<Text>We have no data</Text>}
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatListItem chat={item} />}
      />
    </SafeAreaView>
  );
};

export default ChatsScreen;
