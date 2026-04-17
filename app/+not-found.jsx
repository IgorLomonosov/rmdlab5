import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Ой!" }} />
      <View style={styles.container}>
        <Text style={styles.title}>Екран не знайдено</Text>
        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Повернутися на головну сторінку</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 15 },
  link: { marginTop: 15, paddingVertical: 15 },
  linkText: { fontSize: 16, color: "#1e90ff" },
});
