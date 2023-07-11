import { ImageStyle, StyleSheet, ViewStyle } from "react-native";

export const styles = StyleSheet.create<{
  container: ViewStyle;
  bg: ImageStyle;
  list: ViewStyle;
}>({
  container: {},
  bg: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
});
