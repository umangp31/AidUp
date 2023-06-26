import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";

const CategoryCard = ({imgLink,name}) => {
  
  return (
    <TouchableOpacity style={{ marginRight: 6, position: "relative" }}>
      <View>
        <Image
          source={{ uri: `${imgLink}` }}
          style={{
            height: 84,
            width: 96,
            resizeMode: "contain",
            borderRadius: 4,
            backgroundColor: "#ced4da",
          }}
        />
      </View>
      <Text
        style={{
          position: "absolute",
          bottom: 4,
          color: "black",
          fontWeight: "500",
          textAlign: "center",
          alignSelf: "center",
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
