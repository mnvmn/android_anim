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
}: {
  left?: number;
  top?: number;
}) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const imgWidth = windowHeight / 5;
  const animY = useRef(new Animated.Value(left)).current;
  const [stage, setStage] = useState(STAGES.left);
  const [inProgress, setInProgress] = useState(false);

  function animate(toValue: number) {
    setInProgress(true);
    Animated.timing(animY, {
      toValue,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => {
      setStage(stage === STAGES.left ? STAGES.right : STAGES.left);
      setInProgress(false);
    });
  }

  return (
    <Animated.View
      style={{
        position: "absolute",
        left: animY,
        top,
        width: imgWidth,
        height: imgWidth,
        // height: (120 / 97) * imgWidth,
      }}
    >
      <TouchableOpacity
        activeOpacity={inProgress ? 1 : 0.7}
        onPress={() => {
          if (!inProgress) {
            if (stage === STAGES.left) {
              animate(windowWidth - (imgWidth + 2 * left));
            } else {
              animate(left);
            }
          }
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
