import React from "react";
import { StyleSheet, View, Animated } from "react-native";

const arr = [];
for (var i = 0; i < 11; i++) {
  arr.push(i);
}

export default class App extends React.Component {
  constructor() {
    super();
    this.animatedValue = [];
    arr.forEach((value) => {
      this.animatedValue[value] = new Animated.Value(1);
    });

    Animated.loop(
      Animated.sequence([
        Animated.timing(this.animatedValue[1], {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(this.animatedValue[2], {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.parallel([
          Animated.timing(this.animatedValue[3], {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }),
          Animated.timing(this.animatedValue[4], {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }),
        ]),
        Animated.timing(this.animatedValue[5], {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(this.animatedValue[6], {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.parallel([
          Animated.timing(this.animatedValue[7], {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }),
          Animated.timing(this.animatedValue[8], {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }),
        ]),
        Animated.timing(this.animatedValue[9], {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(this.animatedValue[10], {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.parallel([
          Animated.timing(this.animatedValue[7], {
            toValue: 1,
            duration: 100,
            useNativeDriver: false,
          }),
          Animated.timing(this.animatedValue[8], {
            toValue: 1,
            duration: 100,
            useNativeDriver: false,
          }),
          Animated.timing(this.animatedValue[9], {
            toValue: 1,
            duration: 100,
            useNativeDriver: false,
          }),
          Animated.timing(this.animatedValue[3], {
            toValue: 1,
            duration: 100,
            useNativeDriver: false,
          }),
        ]),

        Animated.timing(this.animatedValue[4], {
          toValue: 1,
          duration: 100,
          useNativeDriver: false,
        }),
        Animated.timing(this.animatedValue[6], {
          toValue: 1,
          duration: 100,
          useNativeDriver: false,
        }),
        Animated.timing(this.animatedValue[5], {
          toValue: 1,
          duration: 100,
          useNativeDriver: false,
        }),
        Animated.parallel([
          Animated.timing(this.animatedValue[10], {
            toValue: 1,
            duration: 100,
            useNativeDriver: false,
          }),
          Animated.timing(this.animatedValue[2], {
            toValue: 1,
            duration: 100,
            useNativeDriver: false,
          }),
        ]),
        Animated.timing(this.animatedValue[1], {
          toValue: 1,
          duration: 100,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            position: "absolute",
            top: 200,
            left: 160,
            opacity: this.animatedValue[1],
            justifyContent: "center",
            backgroundColor: "#FF4500",
          }}
        ></Animated.View>
        <Animated.View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            position: "absolute",
            top: 270,
            left: 195,
            opacity: this.animatedValue[2],
            justifyContent: "center",
            backgroundColor: "orange",
          }}
        ></Animated.View>
        <Animated.View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            position: "absolute",
            top: 270,
            left: 125,
            opacity: this.animatedValue[7],
            justifyContent: "center",
            backgroundColor: "green",
          }}
        ></Animated.View>
        <Animated.View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            position: "absolute",
            top: 340,
            left: 225,
            opacity: this.animatedValue[5],
            justifyContent: "center",
            backgroundColor: "indianred",
          }}
        ></Animated.View>
        <Animated.View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            position: "absolute",
            top: 340,
            left: 155,
            opacity: this.animatedValue[6],
            justifyContent: "center",
            backgroundColor: "grey",
          }}
        ></Animated.View>
        <Animated.View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            position: "absolute",
            top: 340,
            left: 85,
            opacity: this.animatedValue[4],
            justifyContent: "center",
            backgroundColor: "lightpink",
          }}
        ></Animated.View>
        <Animated.View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            position: "absolute",
            top: 410,
            left: 50,
            opacity: this.animatedValue[3],
            justifyContent: "center",
            backgroundColor: "darkkhaki",
          }}
        ></Animated.View>
        <Animated.View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            position: "absolute",
            top: 410,
            left: 120,
            opacity: this.animatedValue[9],
            justifyContent: "center",
            backgroundColor: "springgreen",
          }}
        ></Animated.View>
        <Animated.View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            position: "absolute",
            top: 410,
            left: 190,
            opacity: this.animatedValue[10],
            justifyContent: "center",
            backgroundColor: "violet",
          }}
        ></Animated.View>
        <Animated.View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            position: "absolute",
            top: 410,
            left: 260,
            opacity: this.animatedValue[8],
            justifyContent: "center",
            backgroundColor: "royalblue",
          }}
        ></Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
