import { Stack, router } from "expo-router";
import { Button } from "react-native";
import HomeSearch from "../../components/HomeSearch";
import Register from "../../components/Register";
import Shop from "../../components/Shop";

const layout = () => {
  return (
    <>
      <Stack
        screenOptions={{
          title: "",
          headerLeft: () => (
            <Button title="Back" onPress={() => router.back()} />
          ),
        }}
      />
      {/* <Shop />
      <HomeSearch />
      <Register /> */}
    </>
  );
};

export default layout;
