import { makeApi, Zodios } from "@zodios/core";
import customFetch from "../utils/customFetch";
// import { pokemonDetailSchema } from "./schema";
import { z } from "zod";

const zodApi = makeApi([
  {
    method: "get",
    path: ":url",
    alias: "getPokemonList",
    response: z.any(),
  },
  {
    method: "get",
    path: "pokemon/:id",
    alias: "getPokemonDetail",
    response: z.any(),
  },
]);

const api = new Zodios(zodApi, {
  axiosInstance: customFetch,
});

export default api;
