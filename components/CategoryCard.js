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
            resizeMode: "cover",
            borderRadius: 4,
            backgroundColor: "#ced4da",
          }}
        />
      </View>
      <Text
        style={{
          position: "absolute",
          bottom: 0,
          color: "black",
          fontWeight: "500",
          textAlign: "center",
          alignSelf: "center",
          backgroundColor:"#e5e5e5",
          width:"100%",
          borderBottomLeftRadius:4,
          borderBottomRightRadius:4,
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
