import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import ProjectCard from "./ProjectCard";
import data from '../data.json'
import firestore from "@react-native-firebase/firestore";


const FeaturedProjects = () => {
  const [RowInfo, setRowInfo] = useState()
  const featuredRowsDoc = async () => {
    console.log("ggwp");
    try {
      const featuredRowData = await firestore().collection("featuredRows").doc('7enxhnFFZnuMn08tq2Nt').collection('projectCard').get();
      // await firestore().collection('test').add({roll:33}).then(res=>{console.log(res);})
      // const ref = firestore().collection('test');
      // console.log("hhh",ref)
      console.log('mere doc',featuredRowData.docs);
      // const info=data.docs
      // console.log(data.docs[0]?.data());
      setRowInfo(featuredRowData.docs);
      // console.log('bored',featuredRowData.docs[0])
    } catch (error) {
      console.log("this is err:  ", error);
    }
  };
  useEffect(() => {
    featuredRowsDoc()
  }, [])
  
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
        {RowInfo && RowInfo.map((item, index) => {
          return (
            <ProjectCard
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

const styles = StyleSheet.create({});
