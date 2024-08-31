import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { Redirect, router } from "expo-router";
import { useGlobalContext } from "../context/GlobalProvider";

export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (isLoggedIn && !isLoading) return <Redirect href="/home" />;
  return (
    <SafeAreaView className="h-full bg-black">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full  h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5 flex-1 w-full px-4 ">
            <View className=" gap-2 ">
              <Text className="text-4xl text-white font-bold  ">Discover</Text>
              <Text className="text-white text-lg font-pmedium ">
                endless possibilities with
              </Text>
              <Text className="text-5xl text-secondary-200 font-psemibold py-1.5 ">
                AISync
              </Text>
            </View>
            <Image
              source={images.robot}
              className="w-[130px] h-[130px] absolute -bottom-2 right-0 "
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 text-center mt-7">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>
          <CustomButton
            handlePress={() => router.push(`/sign-in`)}
            containerStyles="w-full mt-7"
            title="Get Started"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#000" style="light" />
    </SafeAreaView>
  );
}
