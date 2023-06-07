import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import ProjectCard from "./ProjectCard";
import info from '../info.json'
const FeaturedPro2 = () => {
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
          Most Liked
        </Text>
        <AntDesign name="arrowright" size={24} color="#00CCBB" />
      </View>
      <Text style={{ fontSize: 12, color: "gray", paddingHorizontal: 8 }}>
        Projects which are most Liked
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
        {info.map((item, index) => {
          return (
            <ProjectCard
              imgLink={item.imgLink}
              projectName={item.projectName}
              description={item.description}
              likes={item.likes}
              theme={item.theme}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedPro2;

const styles = StyleSheet.create({});
