import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { COLORS, icons } from "../constants";

const Rating = ({
  rating,
  iconStyle,
  activeColor = COLORS.purple,
  inactiveColor = COLORS.lightPurple3,
}) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={icons.star}
        style={{
          tintColor: rating >= 1 ? activeColor : inactiveColor,
          ...styles.rateIcon,
          ...iconStyle,
        }}
      />
      <Image
        source={icons.star}
        style={{
          tintColor: rating >= 2 ? activeColor : inactiveColor,
          ...styles.rateIcon,
          ...iconStyle,
        }}
      />
      <Image
        source={icons.star}
        style={{
          tintColor: rating >= 3 ? activeColor : inactiveColor,
          ...styles.rateIcon,
          ...iconStyle,
        }}
      />
      <Image
        source={icons.star}
        style={{
          tintColor: rating >= 4 ? activeColor : inactiveColor,
          ...styles.rateIcon,
          ...iconStyle,
        }}
      />
      <Image
        source={icons.star}
        style={{
          tintColor: rating >= 5 ? activeColor : inactiveColor,
          ...styles.rateIcon,
          ...iconStyle,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rateIcon: {
    height: 15,
    width: 15,
  },
});

export default Rating;
