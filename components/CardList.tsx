import { StyleSheet } from "react-native";

import React, { memo } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { PokemonResultType } from "@/types/types";
import CustomText from "./CustomText";

type Props = {
  item: PokemonResultType;
  id?: string | number;
};

const CardList = ({ id, item }: Props) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`/detail/${id}`)}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`,
          }}
          style={styles.image}
        />
      </View>
      <CustomText type="medium" style={{ textTransform: "capitalize" }}>
        {item.name}
      </CustomText>
    </TouchableOpacity>
  );
};

export default memo(CardList);

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "grey",
    flex: 0.5,
    maxWidth: "48%",
  },
  imageContainer: {
    alignItems: "stretch",
    width: "100%",
    justifyContent: "flex-start",
    height: 200,
    marginBottom: 8,
  },
  image: {
    height: null,
    width: null,
    resizeMode: "contain",
    flex: 1,
  },
});
