import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { Text } from "react-native";

const BlogPost = () => {
  const { slug } = useLocalSearchParams();
  return <Text>{slug}</Text>;
};

export default BlogPost;
