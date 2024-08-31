import { FlatList, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import SearchInput from "../../components/SearchInput";
import EmptyState from "../../components/EmptyState";
import { searchPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";
import { useLocalSearchParams } from "expo-router";

const Search = () => {
  const { query } = useLocalSearchParams();
  const { data: posts, refetch } = useAppwrite(() => searchPosts(query));

  useEffect(() => {
    refetch();
  }, [query]);

  return (
    <SafeAreaView className="bg-black h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard video={item} textStyle="text-white text-3xl" />
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 ">
            <View className="mb-12 ">
              <SearchInput initialQuery={query} />
            </View>
            <Text className="text-white text-4xl font-psemibold">
              Search results
            </Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState title="No Videos found " subtitle="" />
        )}
      />
    </SafeAreaView>
  );
};

export default Search;
