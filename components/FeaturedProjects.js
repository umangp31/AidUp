import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import ProjectCard from "./ProjectCard";
import data from "../data.json";
import firestore from "@react-native-firebase/firestore";

const FeaturedProjects = () => {
  const [topBided, setTopBided] = useState();
  const [topLiked, setTopLiked] = useState();
  const [trending, setTrending] = useState();
  const getTopBided = async () => {
    try {
      const topBidesp = await firestore().collection("Top Bided").get();
      console.log(topBidesp.docs);
      setTopBided(topBidesp.docs);
    } catch (error) {}
  };
  const getTopLiked = async () => {
    try {
      const topLiked = await firestore().collection("Most Liked").get();
      setTopLiked(topLiked.docs);
    } catch (error) {}
  };
  const getTrending = async () => {
    try {
      const trending = await firestore().collection("TrendingWeek").get();
      setTrending(trending.docs);
    } catch (error) {}
  };

  useEffect(() => {
    getTopBided();
    getTopLiked();
    getTrending()
  }, []);

  return (
    <View>
      <View
        style={{
          marginTop: 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 6,
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            fontSize: 24,
          }}
        >
          Top Bided
        </Text>
        <AntDesign name="arrowright" size={24} color="#00CCBB" />
      </View>
      <Text style={{ fontSize: 12, color: "gray", paddingHorizontal: 8 }}>
        Projects which are funded highest
      </Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 8,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
        style={{ paddingTop: 8 }}
      >
        {topBided &&
          topBided.map((item) => {
            console.log(item.id);
            return (
              <ProjectCard
                key={item.id}
                projectImgLink={item._data.projectImgLink}
                projectName={item._data.projectName}
                shortDescription={item._data.shortDescription}
                likeCount={item._data.likeCount}
                projectCategory={item._data.projectCategory}
              />
            );
          })}
      </ScrollView>
      <View
        style={{
          marginTop: 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 6,
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            fontSize: 24,
          }}
        >
          Top Liked
        </Text>
        <AntDesign name="arrowright" size={24} color="#00CCBB" />
      </View>
      <Text style={{ fontSize: 12, color: "gray", paddingHorizontal: 8 }}>
        Projects which are Liked highest
      </Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 8,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
        style={{ paddingTop: 8 }}
      >
        {topLiked &&
          topLiked.map((item) => {
            console.log(item.id);
            return (
              <ProjectCard
                key={item.id}
                projectImgLink={item._data.projectImgLink}
                projectName={item._data.projectName}
                shortDescription={item._data.shortDescription}
                likeCount={item._data.likeCount}
                projectCategory={item._data.projectCategory}
              />
            );
          })}
      </ScrollView>
      <View
        style={{
          marginTop: 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 6,
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            fontSize: 24,
          }}
        >
          Trendingg this week
        </Text>
        <AntDesign name="arrowright" size={24} color="#00CCBB" />
      </View>
      <Text style={{ fontSize: 12, color: "gray", paddingHorizontal: 8 }}>
        Projects which are Liked highest
      </Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 8,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
        style={{ paddingTop: 8 }}
      >
        {trending&&
          trending.map((item) => {
            console.log(item.id);
            return (
              <ProjectCard
                key={item.id}
                projectImgLink={item._data.projectImgLink}
                projectName={item._data.projectName}
                shortDescription={item._data.shortDescription}
                likeCount={item._data.likeCount}
                projectCategory={item._data.projectCategory}
              />
            );
          })}
      </ScrollView>
    </View>
  );
};

export default FeaturedProjects;
