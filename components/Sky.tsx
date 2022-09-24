import React from "react";
import { ImageBackground } from "react-native";
import Images from "../assets/images/bird/Images";

export default function Sky() {
  return (
    <ImageBackground
      source={Images.sky}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
      imageStyle={{ resizeMode: "repeat" }}
    />
  );
}
