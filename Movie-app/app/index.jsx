import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import TrendingMovies from "../components/trendingMovies"
import MovieList from "../components/MovieList"
import { useRouter } from "expo-router";
import Loading from "../components/Loading"
import { trending,upcoming,topRated } from "../api/movieDB"

const index = () => {

    const [trendingData, setTrendingData] = useState([]);
    const [upcomingData, setUpcomingData] = useState([]);
    const [topRatedData, setTopRatedData] = useState([]);
    const [load, isLoad] = useState(false);
    const router = useRouter();


    const getMovies = async () => {
        try {
            let data = await trending();
            // console.log(data);
            setTrendingData(data.results)
            // console.log(trendingData)
            data= await upcoming();
            setUpcomingData(data.results);
            data= await topRated();
            setTopRatedData(data.results);
        }
        catch (e) {
            console.log("errrrrrrrrrrrror")
        }
    }
    useEffect(() => {
        getMovies();
    }, [])

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
                        onPress={() => router.navigate("./SearchScreen")}
                    >
                        <MaterialCommunityIcons
                            name="movie-search-outline"
                            size={28}
                            color="white"
                        />
                    </Pressable>
                </View>
            </SafeAreaView>
            {
                load ? <Loading></Loading>
                    :
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 10 }}
                        className="pt-5"
                    >
                        <TrendingMovies data={trendingData}></TrendingMovies>
                        <MovieList title="Upcoming" data={upcomingData} hideSeeAll={false}></MovieList>
                        <MovieList title="Top Rated" data={topRatedData} hideSeeAll={false}></MovieList>
                    </ScrollView>
            }

        </View>
    );
};

export default index;
