import api from "../api/api";
import axios from "axios";
import {
  PokemonListType,
  PokemonResultType,
  PokemonTypesType,
} from "@/types/types";

export const fetching = () => {
  const getPokemonList = async (url: string) => {
    const response: PokemonListType = await api.getPokemonList({
      params: { url },
    });

    return { response };
  };

  const getPokemonDetail = async (id: number | string) => {
    const response: any = await api.getPokemonDetail({
      params: { id },
    });
    return response;
  };
  return { getPokemonList, getPokemonDetail };
};
