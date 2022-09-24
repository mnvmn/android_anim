import React, { useRef, useState } from "react";
import { Animated, Dimensions, Image, TouchableOpacity } from "react-native";
import Images from "../assets/images/bird/Images";

const STAGES = {
  left: "left",
  right: "right",
};

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
  const [stage, seStage] = useState(STAGES.left);

  function animate(toValue) {
    Animated.timing(animY, {
      toValue,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }

  return (
    <Animated.View
      style={{ position: "absolute", left: animY, top, width, height }}
    >
      <TouchableOpacity
        onPress={() => {
          seStage(stage === STAGES.left ? STAGES.right : STAGES.left);
          const windowWidth = Dimensions.get("window").width;
          animate(windowWidth - (width + 2 * left));
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Image
          resizeMode="stretch"
          source={Images.bird1}
          style={{
            transform: [{ scaleX: stage === STAGES.left ? 1 : -1 }],
            width: "100%",
            height: "100%",
          }}
        />
      </TouchableOpacity>
    </Animated.View>
  );
}
