import { memo } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomText from "./CustomText";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  favorite?: boolean;
  title?: string;
};

const SectionDetail = ({ favorite, title }: Props) => {
  return (
    <View style={styles.wrapper}>
      <CustomText size={32} type="bold">
        {title}
      </CustomText>
      <TouchableOpacity>
        <MaterialIcons
          name={favorite ? "favorite" : "favorite-border"}
          size={28}
        />
      </TouchableOpacity>
    </View>
  );
};
export default memo(SectionDetail);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
