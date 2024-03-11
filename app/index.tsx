import { router } from "expo-router";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Card } from "../components/Card";
import { products } from "../assets/data";
import { MaterialIcons } from "@expo/vector-icons";
import Navbar from "../components/Navbar";

export default function Page() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        className=" absolute flex-1 h-[100%] w-[100%] backdrop-blur-3xl"
        source={{
          uri: "https://media.gq-magazine.co.uk/photos/621cb9ff5360fdaea34263af/master/pass/24022022_A_01.jpeg",
        }}
      ></Image>
      <View className="items-center justify-center text-2xl">
        <Text className="text-5xl from-neutral-50 flex text-black">
          JNS STORE
        </Text>
        <Text className="text-4xl font-thin text-white m-6">Welcome!</Text>
        <View className="flex flex-row-reverse">
          <TouchableOpacity onPress={() => router.navigate("/blog")}>
            <View className="flex-col ">
              <Button
                title="Shop Now!"
                onPress={() => router.navigate("/blog")}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row pt-96">
          <MaterialCommunityIcons
            name="cart-arrow-right"
            size={80}
            color="white"
            justifyContent="center"
            alignItems="start"
          />

          <MaterialIcons name="price-change" size={80} color="white" />
          <MaterialCommunityIcons name="cart-heart" size={80} color="white" />
        </View>

        <View className="flex-col">
          <Button
            title="REGISTER"
            onPress={() =>
              router.navigate({
                pathname: "/blog/[slug]",
                params: { slug: "blog" },
              })
            }
          />
        </View>
      </View>
    </View>
  );
}
