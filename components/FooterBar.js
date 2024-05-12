import { View, StyleSheet, Text } from "react-native";
import OcticonIcon from "react-native-vector-icons/Octicons";

export const FooterBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <OcticonIcon
        name="home"
        color="black"
        size={25}
        onPress={() => navigation.navigate("Home")}
      />
      <OcticonIcon
        name="search"
        color="black"
        size={25}
        onPress={() => navigation.navigate("JobPosts")}
      />
      <OcticonIcon
        name="person"
        color="black"
        size={25}
        onPress={() => navigation.navigate("Portfolio")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: "6.5%",
    width: "100%",
    alignItems: "center",
    borderTopWidth: 1,
  },
});
