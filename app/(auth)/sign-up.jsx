import { ScrollView, View, Text, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert("Error", "Please fill in all the feilds");
    }
    setIsSubmitting(true);

    try {
      const result = await createUser(form.email, form.password, form.username);

      //set it to global state...
      
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[83vh] px-4 my-6">
          <Image
            source={images.logo}
            className="w-[85px] h-[35px]"
            resizeMode="contain"
          />
          <Text className="text-white text-2xl font-pbold mt-10">
            Why don't
          </Text>
          <Text className="text-white text-3xl font-pbold mt-1">let's</Text>
          <Text className="text-secondary-200 text-6xl font-pbold mt-1 py-2.5">
            Sign Up
          </Text>

          <FormField
            title="Username"
            value={form.username}
            placeholder="username"
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-6"
          />
          <FormField
            title="Email"
            value={form.email}
            placeholder="email"
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-6"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            placeholder="password"
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="my-6"
          />
          <CustomButton
            handlePress={submit}
            containerStyles="w-full mt-7"
            title="Sign Up"
            isLoading={isSubmitting}
          />

          <View className="pt-5 flex-row justify-center gap-1">
            <Text className="text-white">Have an account? </Text>
            <Link href="/sign-in" className="text-secondary-200 font-psemibold">
              Sign in now
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
