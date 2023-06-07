import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import ProjectCategories from "../components/ProjectCategories";
import FeaturedProjects from "../components/FeaturedProjects";
import FeaturedPro2 from "../components/FeaturedPro2";
import { useProfile } from "../store/store";

const Homescreen = () => {
  const {currentProfile,setCurrentProfile}=useProfile()
  const profileAvatar=currentProfile?.user?.photo
  const profileName=currentProfile?.user?.name
  return (
    <SafeAreaView style={{backgroundColor:"#f4f3ee",flex:1}} >
      <StatusBar barStyle="dark-content" backgroundColor={"transparent"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header  */}
        <View
          style={{
            flexDirection: "row",
            // paddingBottom: 6,
            alignItems: "center",
            marginHorizontal: 4,
            justifyContent: "space-between",
            paddingHorizontal: 2,
            marginVertical: 6,
            marginHorizontal: 6,
          }}
        >
          <View
            style={{
              flex: 1,
              marginVertical:8
            }}
          >
            <Text style={{ fontSize: 20, color: "gray" }}>
              Welcome Back, {profileName}
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image
              source={{uri:profileAvatar}}
              style={{
                height: 36,
                width: 36,
                backgroundColor: "gray",
                padding: 4,
                borderRadius: 50,
                resizeMode: "cover",
                alignSelf: "center",
              }}
            />
          </View>
        </View>

        {/* Search */}
 
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: 2,
            marginHorizontal: 6,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              backgroundColor: "#ced4da",
              padding: 2,
              alignItems: "center",
              borderRadius: 4,
            }}
          >
            <EvilIcons name="search" size={24} color="black" />

            <TextInput
              style={{ marginRight: 4, paddingVertical: 6 }}
              placeholder="Search for Projects or categories"
              keyboardType="default"
            />
          </View>
        </View>

        {/* Body */}

        <ScrollView
          className="bg-gray-200"
          contentContainerStyle={{
            paddingBottom: 100,
          }}
        >
          {/* Category */}
          <ProjectCategories />
          {/* Featured Row */}
          <FeaturedProjects/>
          <FeaturedPro2/>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homescreen;

const styles = StyleSheet.create({});
