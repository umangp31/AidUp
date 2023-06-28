import {
  Dimensions,
  Image,
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { Link, useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const ProjectScreen = () => {
  const calendly_site="https://calendly.com/umang31/30min"
  const navigation = useNavigation();
  const {
    params: {
      projectImgLink,
      projectName,
      shortDescription,
      likeCount,
      projectCategory,
      projectDetails,
      fundingDetails,
      techStack,
    },
  } = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  console.log("logg", techStack);
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#ced4da", position: "relative" }}
    >
      <ScrollView showsVerticalScrollIndicator={false}
        style={{ flex: 1, position: "relative", marginHorizontal: 6 }}
      >
        <View style={{ position: "relative" }}>
          <Image
            source={{ uri: `${projectImgLink}` }}
            style={{
              height: 250,
              width: "100%",
              resizeMode: "cover",
              position: "relative",
            }}
          />
        </View>
        <Text style={{ fontSize: 34, fontWeight: "700" }}>{projectName}</Text>
        <View style={{ flexDirection: "row", margin: 4,paddingVertical:4 }}>
          <Text style={{ fontWeight: "600", color: "#adb5bd",fontSize:20 }}>
            Funding Raised
          </Text>
          <Text style={{ color: "#161a1d",fontSize:20 }}>
            {":"} {fundingDetails}
          </Text>
        </View>
        <View>
          <Pressable
          onPress={()=>{
            Linking.openURL(calendly_site);
          }}
            style={{
              backgroundColor: "#161a1d",
              width: Dimensions.get("screen").width * 0.9,
              borderRadius: 8,
              paddingVertical: 12,
              justifyContent: "center",
              alignSelf: "center",
              marginVertical: 4,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 22,
                fontWeight: "500",
                alignSelf: "center",
                justifyContent: "center",
                
              }}
            >
              Interested to Fund
            </Text>
          </Pressable>
        </View>
        <View style={{flexDirection:"row",paddingVertical:8}} >
          <Text style={{fontSize:20,fontWeight:"600",color:"#adb5bd"}} >Tech Stack: </Text>
          <Text style={{fontSize:20,fontWeight:"600",flex:1}}>{techStack}</Text>
        </View>
        <View style={{paddingHorizontal:4,paddingVertical:4}}>
          <Text style={{ fontSize: 28, fontWeight: "700",paddingVertical:4 }}>
            Project Details:
          </Text>
          <Text style={{fontSize:16}} >{projectDetails}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProjectScreen;

const styles = StyleSheet.create({});
