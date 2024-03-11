import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Link } from "expo-router";
import { Stack, router } from "expo-router";
import { products } from "../../assets/data";
import { Card } from "../../components/Card";
import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function Page() {
  const [searchText, setSearchText] = useState("");

  return (
    <View className="flex-1 hover:scale-50 mt-6">
      <View className="items-center justify-center flex mx-4 mb-4">
        <Navbar />
        <TextInput
          className="border-gray-600 border p-2 px-2 rounded-lg w-full"
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Enter any product name.."
        />
      </View>

      <FlatList
        data={products}
        renderItem={({ item }) => <Card product={item} />}
        keyExtractor={(product) => product.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
