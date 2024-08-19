import CardList from "@/components/CardList";
import Header from "@/components/Header";
import Lists from "@/components/Lists";
import { storage } from "@/utils/storage";
import { Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";

const Favorites = () => {
  const lists = JSON.parse(storage.getString("favorites") || "[]");

  return (
    <Fragment>
      <Header title="Favorites Pokemon" />
      <View style={styles.container}>
        <Lists pokemonList={lists} />
      </View>
    </Fragment>
  );
};
export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
