import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import category from "../category.json";
import firestore from "@react-native-firebase/firestore";

const ProjectCategories = () => {
  const [info, setinfo] = useState()
  const projectCategoryDoc = async () => {
    console.log("ggwp");
    try {
      const data = await firestore().collection("projectCategory").get();
      // await firestore().collection('test').add({roll:33}).then(res=>{console.log(res);})
      // const ref = firestore().collection('test');
      // console.log("hhh",ref)
      console.log(data.docs);
      // const info=data.docs
      // console.log(data.docs[0]?.data());
      setinfo(data.docs);
    } catch (error) {
      console.log("this is err:  ", error);
    }
  };
  useEffect(() => {
    projectCategoryDoc();
  },[]);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 8,
        paddingTop: 10,
      }}
    >
      { info && info.map((item, index) => {
        return <CategoryCard imgLink={item._data.imgLink} name={item._data.name} />;
      })}
    </ScrollView>
  );
};

export default ProjectCategories;

const styles = StyleSheet.create({});
