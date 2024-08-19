import { RPW } from "@/utils/helpers";
import { memo } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

type Props = {
  img: string;
};
const CardDetail = ({ img }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: img,
        }}
        style={styles.image}
      />
    </View>
  );
};
export default memo(CardDetail);

const styles = StyleSheet.create({
  container: {
    borderColor: "grey",
    borderWidth: 1,
    height: 115,
    minWidth: RPW(40),
    flex: 1,
    borderRadius: 8,
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    height: null,
    width: null,
  },
});
