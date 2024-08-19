import CardList from "@/components/CardList";
import Lists from "@/components/Lists";
import SearchBar from "@/components/SearchBar";
import { fetching } from "@/utils/fetching";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";
import { View } from "react-native";

export default function Index() {
  const { getPokemonList } = fetching();
  const [searchValue, setSearchValue] = useState("");

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ["pokemonList"],
      queryFn: ({ pageParam }) => {
        return getPokemonList(pageParam);
      },
      initialPageParam: "pokemon",
      getNextPageParam: ({ response }) => {
        if (searchValue) {
          return null;
        }
        return response.next;
      },
      staleTime: 5 * (60 * 1000),
    });

  const pokemonList =
    data?.pages
      .flatMap((page: { response: any }) => page.response.results)
      .filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(searchValue.toLowerCase());
      }) ?? [];

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <SearchBar
        onSubmit={(text: string) => setSearchValue(text)}
        onClear={() => setSearchValue("")}
        text={searchValue}
      />

      <Lists
        pokemonList={pokemonList}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
        isLoading={isLoading}
      />
    </View>
  );
}
