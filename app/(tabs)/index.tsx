import { StyleSheet, FlatList } from "react-native";
import { theme } from "@/theme";
import { useRouter } from "expo-router";
import { usePlantsStore } from "@/store/plantsStore";
import PlantCard from "@/components/PlantCard";
import PlantlyButton from "@/components/PlantlyButton";

export default function HomeScreen() {
  const router = useRouter();
  const plants = usePlantsStore((state) => state.plants);

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={plants}
      renderItem={({ item }) => <PlantCard plant={item} />}
      ListEmptyComponent={
        <PlantlyButton
          title="Add your first plant"
          onPress={() => router.navigate("/new")}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    padding: 12,
  },
});
