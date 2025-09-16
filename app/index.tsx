import { View, Text, StyleSheet } from "react-native";
import { theme } from "@/theme";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Index</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
  },
});
