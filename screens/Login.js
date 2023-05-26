import {
  Button,
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useState } from "react";
const Login = () => {
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;
  const [user, setuser] = useState(null);
  GoogleSignin.configure({
    webClientId:
      "980069873476-uhf1v1ru3t7bbpat3qd5gl54ijhs8non.apps.googleusercontent.com",
  });

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const data = await GoogleSignin.signIn();
    navigation.navigate("Home");
    // Create a Google credential with the token
    // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    console.log(data);
    // Sign-in the user with the credential
    // return auth().signInWithCredential(googleCredential);
  }
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#e5e5e5",
        justifyContent: "space-around",
        // paddingTop:"5%"
      }}
    >
      <View style={{ position: "relative", top: "5%" }}>
        <Image
          source={require("../assets/sammy-finance.png")}
          style={{ height: 400, width: 400, resizeMode: "contain" }}
        />
      </View>

      <View>
        <Text style={{ fontSize: 36, fontWeight: "800" }}>
          Gateway for your
        </Text>
        <Text style={{ fontSize: 36, fontWeight: "800" }}>
          Projects to Products
        </Text>
      </View>
      <View style={{ position: "relative", bottom: 0 }}>
        <Pressable
          style={{
            backgroundColor: "#161a1d",
            width: width * 0.9,
            borderRadius: 50,
            paddingVertical: 12,
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 4,
          }}
          onPress={async () => {
            await onGoogleButtonPress();
          }}
        >
          <Text style={{ color: "#fff", fontSize: 22, fontWeight: "500" }}>
            Login
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#161a1d",
            width: width * 0.9,
            borderRadius: 50,
            paddingVertical: 12,
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 4,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 22, fontWeight: "500" }}>
            Register
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
