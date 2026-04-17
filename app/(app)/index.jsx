import { Link, Stack } from "expo-router";
import {
    Button,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useAuth } from "../../context/AuthContext";
import { PRODUCTS } from "../../data/products";

export default function CatalogScreen() {
  const { logout } = useAuth();

  const renderItem = ({ item }) => (
    <Link href={`/details/${item.id}`} asChild>
      <TouchableOpacity style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>{item.price} грн</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <>
      <Stack.Screen options={{ title: "Магазин" }} />

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Каталог товарів</Text>
          <Button title="Вийти" onPress={logout} color="#ff3b30" />
        </View>

        <FlatList
          data={PRODUCTS}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerTitle: { fontSize: 20, fontWeight: "bold" },
  list: { padding: 10 },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
    backgroundColor: "#eee",
  },
  info: { flex: 1, justifyContent: "center" },
  title: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
  price: { fontSize: 16, color: "#2e8b57", fontWeight: "600" },
});
