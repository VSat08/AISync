import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../constants";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4 ">
      <Image
        source={images.empty}
        className="w-64 h-64 "
        resizeMode="contain"
      />
      <Text className="text-white text-center">{title}</Text>
      <CustomButton
        title="Create video"
        handlePress={() => router.push("/create")}
        textStyles="font-psemibold "
        containerStyles="w-full my-5"
      />
    </View>
  );
};

export default EmptyState;
