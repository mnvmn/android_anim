import React from "react";
import { Dimensions, ImageBackground, View } from "react-native";
import Images from "../assets/images/bird/Images";

export default function Floor() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const imgWidth = windowHeight / 5;
  const imgHeight = imgWidth;
  const repeats = Math.ceil(windowWidth / imgWidth);

  return Array.from(Array(repeats).keys()).map((item, index) => (
    <View
      key={index}
      style={{
        position: "absolute",
        bottom: 0,
        left: index * imgWidth,
        width: imgWidth,
        height: imgHeight,
      }}
    >
      <ImageBackground
        source={Images.floor}
        style={{
          width: "100%",
          height: "100%",
        }}
        imageStyle={{ resizeMode: "stretch" }}
      />
    </View>
  ));
}
