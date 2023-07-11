import { ImageStyle, TextStyle, StyleSheet, ViewStyle } from "react-native";

export const styles = StyleSheet.create<{
  container: ViewStyle;
  image: ImageStyle;
  content: ViewStyle;
  row: ViewStyle;
  name: TextStyle;
  secondaryTxt: TextStyle;
}>({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  content: {
    flex: 1,
    paddingLeft: 10,
    paddingBottom: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgray",
  },
  row: {
    flexDirection: "row",
  },
  name: {
    flex: 1,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  secondaryTxt: {
    color: "gray",
  },
});
