import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import category from "../category.json";
const ProjectCategories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 8,
        paddingTop: 10,
      }}
    >
      {category.map((item,index) => {
        return (<CategoryCard imgLink={item.imgLink} theme={item.theme} />)
      })}
    </ScrollView>
  );
};

export default ProjectCategories;

const styles = StyleSheet.create({});
