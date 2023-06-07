import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const ProjectScreen = ({
  imgLink,
  projectName,
  likes,
  theme,
  description,
  projectDetails,
  techStack,
//   fundingDetails
}) => {
    console.log("logg",imgLink);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#e5e5e5" }}>
      <ScrollView style={{ margin: 8 }}>
        <View>
          <Image
            source={{ uri: `${imgLink}` }}
            style={{
              height: 400,
              width: "100%",
              resizeMode: "contain",
            }}
          />
        </View>
        <View style={{flexDirection:"row"}} >
            <Text style={{fontWeight:"600",color:"#ced4da"}} >Funding Raised</Text>
            <Text style={{color:"#161a1d"}} >{fundingDetails}</Text>
        </View>
        <View>
          <Pressable
            style={{
              backgroundColor: "#161a1d",
              width: width * 0.9,
              borderRadius: 8,
              paddingVertical: 12,
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 4,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 22, fontWeight: "500" }}>
              Intrested to Fund
            </Text>
          </Pressable>
        </View>
        <View>
            <Text style={{fontSize:36,fontWeight:"700"}} >Project Details</Text>
            <Text>{projectDetails}</Text>
            <Text>{techStack}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProjectScreen;

const styles = StyleSheet.create({});
