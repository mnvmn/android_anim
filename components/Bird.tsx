import React from "react";
import { Animated } from "react-native";
import Images from "./Images";

export default function Bird() {
  let image = Images["bird1"];

  return (
    <Animated.Image
      style={{
        position: "absolute",
        left: 20,
        top: 20,
        width: 100,
        height: 100,
      }}
      resizeMode="stretch"
      source={image}
    />
  );
}
