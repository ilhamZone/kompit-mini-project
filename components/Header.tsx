import colors from "@/constants/colors";
import { AntDesign } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { memo } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  title?: string;
  onPress?: () => void;
};

const Header = ({ title = "Pokedex", onPress }: Props) => {
  return (
    <Stack.Screen
      options={{
        headerTitleAlign: "center",
        contentStyle: styles.container,
        headerTitle: title,
        headerTitleStyle: styles.title,
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => (onPress ? onPress() : router.back())}
            style={styles.backBtn}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        ),
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
  backBtn: {
    marginLeft: 16,
  },
});
