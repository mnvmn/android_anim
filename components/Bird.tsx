import React, { useRef, useState } from "react";
import { Animated, Dimensions, Image, TouchableOpacity } from "react-native";
import Images from "../assets/images/bird/Images";

const STAGES = {
  left: "left",
  right: "right",
};

const BIRD_PHASES = [Images.bird1, Images.bird2];

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
  const [phase, setPhase] = useState(0);

  function animate(toValue: number) {
    setInProgress(true);
    const int = setInterval(() => {
      setPhase((p) => ++p);
    }, 100);

    Animated.timing(animY, {
      toValue,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => {
      setStage(stage === STAGES.left ? STAGES.right : STAGES.left);
      setInProgress(false);
      clearInterval(int);
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
          source={BIRD_PHASES[phase % BIRD_PHASES.length]}
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
