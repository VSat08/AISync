import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";
import { router, usePathname } from "expo-router";

const SearchInput = ({ initialQuery }) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");

  // Function to handle the search action
  const handleSearch = () => {
    if (!query) {
      return Alert.alert(
        "Missing query",
        "Please input something to search results across database"
      );
    }
    if (pathname.startsWith("/search")) {
      router.setParams({ query });
    } else {
      router.push(`/search/${query}`);
    }
  };

  return (
    <View className="w-full h-14 bg-black-100 rounded-2xl px-4 border border-gray-50/20 focus:border-secondary-100 items-center flex-row space-x-4">
      <TextInput
        className="flex-1 text-white font-pregular text-sm mt-1 placeholder:font-pmedium"
        value={query}
        placeholder="search your video topic"
        placeholderTextColor="#555"
        onChangeText={(e) => setQuery(e)}
        onSubmitEditing={handleSearch} // Handle Enter key press
        returnKeyType="search" // Optional: show "Search" on the keyboard
      />

      <TouchableOpacity onPress={handleSearch}>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
