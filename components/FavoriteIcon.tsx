import { MaterialIcons } from "@expo/vector-icons";
import { memo } from "react";
import { View, Text, TouchableOpacity, ViewStyle } from "react-native";

type Props = {
  favorite?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
};

const FavoriteIcon = ({ favorite, onPress, style }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <MaterialIcons
        name={favorite ? "favorite" : "favorite-border"}
        size={28}
      />
    </TouchableOpacity>
  );
};
export default memo(FavoriteIcon);
