import { router, Stack, useLocalSearchParams } from "expo-router";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { PRODUCTS } from "../../../data/products";

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <>
        <Stack.Screen options={{ title: "Помилка" }} />
        <View style={styles.container}>
          <Text style={styles.title}>Товар не знайдено :(</Text>
          <Button title="Повернутися" onPress={() => router.back()} />
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: product.title }} />

      <View style={styles.container}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price} грн</Text>
        <Text style={styles.description}>{product.description}</Text>

        <View style={styles.buttonContainer}>
          <Button title="Назад до каталогу" onPress={() => router.back()} />
        </View>
      </View>
    </>
  );
}

// ... стилі залишаються без змін

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "#eee",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  price: {
    fontSize: 22,
    color: "#2e8b57",
    fontWeight: "600",
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
    lineHeight: 24,
  },
  buttonContainer: { marginTop: 30, width: "100%" },
});
