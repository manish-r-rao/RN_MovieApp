import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import TrendingMovies from "../components/trendingMovies"
import MovieList from "../components/MovieList"
import { useRouter } from "expo-router";

const index = () => {

    const [upcomingData, setUpcomingData] = useState(["antman", "2antman", "3antman"]);

    const router=useRouter();

    return (
        <View className="flex-1 bg-neutral-800">
            <SafeAreaView className="-mb-2 mx-4">
                <View className="flex-row justify-between">
                    <FontAwesome6 name="bars" size={28} color="white" />
                    <View className="flex-row">
                        <Text className="font-bold text-2xl color-yellow-500">
                            M
                        </Text>
                        <Text className="color-white text-2xl font-medium">
                            ovies
                        </Text>
                    </View>
                    <Pressable
                        onPress={()=>router.navigate("./SearchScreen")}
                    >
                        <MaterialCommunityIcons
                            name="movie-search-outline"
                            size={28}
                            color="white"
                        />
                    </Pressable>
                </View>
            </SafeAreaView>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 10 }}
                className="pt-5"
            >
                <TrendingMovies data={[{ id: 1, title: "man" }, { id: 2, title: "manish" }]}></TrendingMovies>
                <MovieList title="Upcoming" data={upcomingData} hideSeeAll={false}></MovieList>
                <MovieList title="Top Rated" data={upcomingData} hideSeeAll={false}></MovieList>
            </ScrollView>
        </View>
    );
};

export default index;
