import { theme } from "@/theme";
import { Text, View, StyleSheet } from "react-native";

export default function NewScreen() {
  return (
    <View style={styles.container}>
      <Text>New plant</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
    alignItems: "center",
  },
});
