import CardDetail from "@/components/CardDetail";
import CustomText from "@/components/CustomText";
import Header from "@/components/Header";
import SectionDetail from "@/components/SectionDetail";
import { fetching } from "@/utils/fetching";
import { RPH, RPW } from "@/utils/helpers";
import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import { Fragment } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";

const Detail = () => {
  const { id } = useLocalSearchParams();
  const { getPokemonDetail } = fetching();

  const { data, isLoading } = useQuery({
    queryKey: ["pokemonDetail", id],
    queryFn: () => getPokemonDetail(id as string),
  });

  return (
    <Fragment>
      <Header title="Pokemon Detail" />

      {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size={60} />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`,
            }}
            style={styles.image}
          />
          <View style={styles.line} />
          <View style={styles.content}>
            <SectionDetail title={data?.name} />
            <CustomText style={{ marginTop: 20 }} type="bold" size={18}>
              Sprite Gallery
            </CustomText>
            <View style={styles.cardList}>
              <CardDetail img={data?.sprites?.front_default ?? ""} />
              <CardDetail img={data?.sprites?.back_default ?? ""} />
              <CardDetail img={data?.sprites?.back_shiny ?? ""} />
              <CardDetail img={data?.sprites?.front_shiny ?? ""} />
            </View>
            <CustomText type="bold" size={18}>
              Abilities
            </CustomText>
            <View style={styles.wrapAbilities}>
              {data?.abilities.map((ability, index) => (
                <CustomText key={index} size={14} color="#4B4B4B">
                  {ability?.ability?.name}
                </CustomText>
              ))}
            </View>
          </View>
        </ScrollView>
      )}
    </Fragment>
  );
};
export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: RPW(100),
    height: RPH(28),
    resizeMode: "contain",
  },
  line: {
    height: 1,
    width: RPW(100),
    backgroundColor: "#F0F0F0",
    marginTop: 20,
  },
  content: {
    paddingHorizontal: 18,
    marginTop: 12,
  },
  cardList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    marginTop: 8,
    marginBottom: 24,
  },
  wrapAbilities: {
    rowGap: 8,
    marginTop: 8,
    marginBottom: 20,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
