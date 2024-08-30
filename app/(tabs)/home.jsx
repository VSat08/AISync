import {
  Alert,
  FlatList,
  Image,
  RefreshControl,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import { getAllPosts, getLatestPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";

const Home = () => {
  const { data: posts, refetch } = useAppwrite(getAllPosts);
  const { data: latestPosts } = useAppwrite(getLatestPosts);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);

    // recall posts
    await refetch();
    setRefreshing(false);
  };

  // console.log(posts);
  return (
    <SafeAreaView className="bg-black h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard video={item} textStyle="text-white text-3xl" />
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6 ">
            <View className="flex justify-between items-center flex-row mb-6">
              <View className="">
                <Text className="text-white text-2xl font-psemibold">
                  Welcome Sam
                </Text>
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
              <Trending posts={latestPosts ?? []} />
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
