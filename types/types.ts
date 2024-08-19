export type PokemonTypesType =
  | "fighter"
  | "flying"
  | "ground"
  | "normal"
  | "poison"
  | "rock"
  | "steel"
  | "water"
  | "grass"
  | "electric"
  | "psychic"
  | "ice"
  | "dragon"
  | "dark"
  | "fairy"
  | string[];

export type PokemonListType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResultType[];
};

export type PokemonResultType = {
  name: string;
  url?: string;
  id?: string;
  type?: string;
};
