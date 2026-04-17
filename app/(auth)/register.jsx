import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useAuth } from "../../context/AuthContext";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { register } = useAuth();

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert("Помилка", "Паролі не співпадають!");
      return;
    }
    register(email, password, name);
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Реєстрація</Text>

      <TextInput
        style={styles.input}
        placeholder="Ім'я"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Підтвердження паролю"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <Button title="Зареєструватися" onPress={handleRegister} />

      <Link href="/login" style={styles.link}>
        <Text style={styles.linkText}>Вже є акаунт? Увійти</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  link: { marginTop: 15, alignItems: "center" },
  linkText: { color: "blue" },
});
