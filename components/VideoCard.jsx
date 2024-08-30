import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const VideoCard = ({
  video: {
    title,
    thumbnail,
    video,
    creator: { username, avatar },
  },
  textStyle,
}) => {
  const [play, setPlay] = useState(false);
  return (
    <View className=" flex-col px-4 mb-14">
      <View className="flex flex-row gap-3 items-start">
        <View className="justify-center items-center flex flex-row flex-1">
          {/* for avatar */}
          <View className="w-[46px] h-[46px] rounded-2xl border border-secondary-200 justify-center items-center p-0.5">
            <Image
              source={{
                uri: avatar,
              }}
              className="w-full h-full rounded-xl "
              resizeMode="cover"
            />
          </View>
          {/* for texts */}
          <View className="justify-center flex-1 ml-3 gap-y-1">
            <Text className="text-white text-xl font-pmedium" numberOfLines={1}>
              {title}
            </Text>
            <Text
              className="text-white font-pregular text-xs"
              numberOfLines={1}
            >
              {username}
            </Text>
          </View>
        </View>
        {/* for menu button */}
        <View className="pt-2">
          <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
        </View>
      </View>
      {play ? (
        <Text className="text-white">Playing</Text>
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
          className="w-full h-60 rounded-xl mt-3 relative justify-center items-center"
        >
          <Image
            source={{
              uri: thumbnail,
            }}
            resizeMode="cover"
            className="w-full h-full mt-3 rounded-3xl"
          />
          <Image
            source={icons.play}
            resizeMode="contain"
            className="h-16 w-16 absolute"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
