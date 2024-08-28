import { FlatList, Image, RefreshControl, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);

    // recall posts
    setRefreshing(false);
  };
  return (
    <SafeAreaView className="bg-black h-full">
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Text className="text-white text-3xl">{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6 ">
            <View className="flex justify-between items-start flex-row mb-6">
              <View className="">
                <Text className="text-white text-2xl font-pmedium">
                  Welcome Back !
                </Text>
                <Text className="text-white text-3xl font-psemibold">Sam</Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>
            <SearchInput placeholder="search your video topic" />
            <View className="w-full flex-1 pt-5 pb-8 ">
              <Text className="text-gray-100 text-2xl font-pregular mb-3">
                Latest Videos
              </Text>
              <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState title="No Videos found " subtitle="" />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#fa8128"]}
            progressBackgroundColor="#181818"
          />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
