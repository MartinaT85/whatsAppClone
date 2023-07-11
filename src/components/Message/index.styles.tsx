import { StyleSheet, ViewStyle } from "react-native";

export const styles = StyleSheet.create<{
  container: ViewStyle;
  msg: ViewStyle;
}>({
  container: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: "80%",
  },
  msg: {
    paddingVertical: 5,
  },
});
