import { useState } from "react";
import {
  Button,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Product } from "../assets/type";
import { router, usePathname } from "expo-router";

type CardProps = {
  product: Product;
};

export const Card = ({ product }: CardProps) => {
  const [likeCount, strikeCount] = useState(0);
  const handleLikeCount = () => strikeCount(likeCount + 1);
  const handleDislikeCount = () => {
    if (likeCount !== 0) strikeCount(likeCount - 1);
  };

  const handleAddtoCart = () => router.navigate({ pathname: "/cart" });

  return (
    <View className="flex flex-col justify-center items-center shadow outline-4 border">
      <View className="px-4 border-gray-500 rounded border-[2px] py-1 ">
        <View className="flex gap-4 rounded border-spacing-x-7  outline outline-offset-2 outline-1 ... divide-y-0 m-2 ring-4 justify-between px-5 py-0">
          <View className="w-full sm:w-[300px] md:w-[70%] relative"></View>

          <Image
            className="h-80 w-80"
            source={{
              uri: product.image,
            }}
          />
          <Text className="absolute top-3 left-6 text-black italic p-5 text-sm">
            {product.name}
          </Text>
          <View className="flex-row justify-center space-x-3">
            <TouchableOpacity onPress={handleDislikeCount}>
              <View className="bg-neutral-300 p-4 rounded-lg items-center ">
                <Text>-</Text>
              </View>
            </TouchableOpacity>
            <Text className="self-center text-2xl ">{likeCount}</Text>
            <TouchableOpacity onPress={handleLikeCount}>
              <View className="bg-neutral-300 p-4 rounded-lg items-center ">
                <Text>+</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={handleAddtoCart}>
            <View className="bg-slate-300 p-4 rounded-sm items-center border outline-double  ">
              <Text className="font-normal text-2xl rounded-sm">
                Add to Cart
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
