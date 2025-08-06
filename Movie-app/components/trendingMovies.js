import { View, Text, Pressable, ImageBase, Image } from "react-native";
import React, { useEffect } from "react";
import Carousel from "react-native-reanimated-carousel";
import apiData from "./apiData"


// const {height,width};
const TrendingMovies = ({ data }) => {


    return (
        <View className="w-full ">
            <Text className="text-white ml-4 text-xl">Trending</Text>
            <View className="flex-1 items-center mt-4">
                <Carousel
                    data={data}
                    renderItem={({ item }) => (
                        <View>
                            <MovieCard></MovieCard>
                        </View>
                    )}
                    scrollAnimationDuration={2000}
                    autoPlay={true}
                    autoPlayInterval={2000}
                    width={200}
                    height={320}
                ></Carousel>
            </View>
        </View>
    );
};

const MovieCard = () => {
    return (
        <Pressable
        >
            <Image
                source={require("../assets/images/3RokBWEkQqJRZEVP3DPwGm5MYh6.webp")}
                style={{
                    width: 200,
                    height: 300
                }}
                className="rounded-3xl"
            ></Image>
        </Pressable>
    )
}

export default TrendingMovies;
