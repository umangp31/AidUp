import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import data from '../data.json'
const ProjectCard = ({imgLink,projectName,likes,theme,description,projectDetails,techStack,fundingDetails}) => {
  const navigation = useNavigation();
    console.log(fundingDetails);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Project",{
            imgLink,
            projectName,
            likes,
            theme,
            description,
            projectDetails,
            techStack,
            fundingDetails,
        });
      }}
      className="bg-white mr-3 shadow"
      style={{
        marginRight: 6,
        shadowColor: "black",
        backgroundColor: "#fff",
      }}
    >
      <Image
        style={{
          height: 144,
          width: 256,
          borderRadius: 4,
          resizeMode: "cover",
          backgroundColor: "#e5e5e5",
        }}
        source={{uri:`${imgLink}`}}
      />
      <View
        style={{ paddingHorizontal: 6, paddingBottom: 8 }}
        className="px-3 pb-4"
      >
        <Text
          style={{ fontWeight: "500", fontSize: 24, paddingTop: 12 }}
          className="font-bold text-lg pt-2"
        >
          {projectName}
        </Text>
        <View
          style={{ flexDirection: "row", alignItems: "center" }}
          className="flex-row items-center space-x-1"
        >
          <EvilIcons name="heart" size={24} color="black" />
          <Text
            style={{ fontSize: 12, color: "#e5e5e5" }}
            className="text-xs text-gray-500"
          >
            <Text style={{ color: "#ced4da" }} className="text-green-500">
              {likes}
            </Text>{" "}
             {theme}
          </Text>
        </View>

        <View
          style={{ flexDirection: "row", alignItems: "center" }}
          className="flex-row items-center space-x-1"
        >
          <EvilIcons name="tag" size={24} color="black" />
          <Text
            style={{ fontSize: 12, color: "#ced4da" }}
            className={`text-xs text-gray-500  `}
          >
            {description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProjectCard;

const styles = StyleSheet.create({});
