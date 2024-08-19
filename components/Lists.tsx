import React, { memo } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";

import { PokemonResultType } from "@/types/types";
import CardList from "./CardList";
import { findUlrId } from "@/utils/helpers";

interface Props {
  pokemonList: PokemonResultType[];
  hasNextPage?: boolean;
  fetchNextPage?: () => void;
  isLoading?: boolean;
  isFetchingNextPage?: boolean;
}

const Lists = ({
  pokemonList,
  hasNextPage,
  fetchNextPage,
  isLoading,
  isFetchingNextPage,
}: Props) => {
  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="large" style={styles.centerContent} />
      ) : (
        <FlatList
          style={styles.wrapList}
          showsVerticalScrollIndicator={false}
          data={pokemonList}
          columnWrapperStyle={{ gap: 12 }}
          contentContainerStyle={{ gap: 16 }}
          renderItem={({ item, index }: any) => (
            <CardList
              key={index}
              item={item}
              id={item.id ?? findUlrId(item.url)}
            />
          )}
          keyExtractor={(_, index) => index.toString()}
          onEndReached={() => {
            if (hasNextPage && fetchNextPage) {
              fetchNextPage();
            }
          }}
          onEndReachedThreshold={0.5}
          numColumns={2}
          ListFooterComponent={() =>
            isFetchingNextPage ? (
              <ActivityIndicator size="large" style={styles.footerPadding} />
            ) : null
          }
        />
      )}
    </>
  );
};

export default memo(Lists);

const styles = StyleSheet.create({
  wrapList: {
    flex: 1,
    paddingBottom: 16,
    marginTop: 12,
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footerPadding: {
    paddingVertical: 20,
  },
});
