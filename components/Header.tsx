import colors from "@/constants/colors";
import { router, Stack } from "expo-router";
import { memo } from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  title?: string;
};

const Header = ({ title = "Pokedex" }: Props) => {
  return (
    <Stack.Screen
      options={{
        headerTitleAlign: "center",
        contentStyle: styles.container,
        headerTitle: title,
        headerTitleStyle: styles.title,
      }}
    />
  );
};
export default memo(Header);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
