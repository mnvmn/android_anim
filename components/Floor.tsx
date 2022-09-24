import React from "react";
import { ImageBackground } from "react-native";
import Images from "../assets/images/bird/Images";

export default function Floor() {

  return (
    <ImageBackground
      source={Images.floor}
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "240px",
      }}
      imageStyle={{ resizeMode: "repeat" }}
    />
  );
}
