import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  keyboardType,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className="w-full h-14 bg-black-100 rounded-2xl px-4 border border-gray-50/20 focus:border-secondary-100 items-center flex-row space-x-4">
      <TextInput
        className="flex-1 text-white font-pregular text-sm mt-1 "
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#777"
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
      />

      <TouchableOpacity onPress={() => {}}>
        <Image
          source={icons.search}
          className="w-5 h-5 "
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
