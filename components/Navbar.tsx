import { Link } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

const Navbar = () => {
  return (
    <>
      <View className="p-2 left-28">
        <Link href={"./categories"}>
          {" "}
          <Text>Categories</Text>
        </Link>
      </View>
    </>
  );
};

export default Navbar;
