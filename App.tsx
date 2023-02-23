import { ImageBackground, StyleSheet, View } from "react-native";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
export default function App() {
  return (
    <LinearGradient colors={["#420522", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        resizeMode="cover"
        source={require("./assets/images/dice.png")}
        style={styles.rootScreen}
        imageStyle={styles.imageStyle}
      >
        <StartGame />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.15,
  },
});
