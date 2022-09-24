import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import Images from "./Images";

export default function Bird({
  left = 20,
  top = 20,
  width = 100,
  height = 100,
}: {
  left?: number;
  top?: number;
  width?: number;
  height?: number;
}) {
  const animY = useRef(new Animated.Value(left)).current;

  useEffect(() => {
    Animated.timing(animY, {
      toValue: 200,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, [animY]);

  return (
    <Animated.Image
      style={{
        position: "absolute",
        left: animY,
        top,
        width,
        height,
      }}
      resizeMode="stretch"
      source={Images.bird1}
    />
  );
}
