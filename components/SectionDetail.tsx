import { memo } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomText from "./CustomText";
import { MaterialIcons } from "@expo/vector-icons";
import FavoriteIcon from "./FavoriteIcon";

type Props = {
  favorite?: boolean;
  title?: string;
  onPress?: () => void;
};

const SectionDetail = ({ favorite, title, onPress }: Props) => {
  return (
    <View style={styles.wrapper}>
      <CustomText size={32} type="bold">
        {title}
      </CustomText>
      <FavoriteIcon favorite={favorite} onPress={onPress} />
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
