import React, { Component } from "react";
import { View, Platform, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "~theme/colors";
import PropTypes from "prop-types";

export default class ComingSoon extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon
          name={Platform.OS === "ios" ? "ios-hammer" : "md-hammer"}
          size={100}
          color={colors.PRIMARY}
        />
        <Text style={styles.text}>
          {"L'écran de " +
            this.props.title +
            " est en construction.\nRevenez bientôt !"}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 10
  },
  text: {
    fontWeight: "bold",
    color: colors.SECONDARY,
    fontSize: 20,
    textAlign: "center"
  }
});

ComingSoon.propTypes = {
  title: PropTypes.string.isRequired
};
