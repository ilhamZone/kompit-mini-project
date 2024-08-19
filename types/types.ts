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

// Detail
export type DetailType = {
  name: string;
  abilities: Abilities[];
  sprites: Sprite;
};

export type Abilities = {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
};

export type Ability = {
  name: string;
  url: string;
};

export type Sprite = {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  other: Other;
};

export type Other = {
  home: Home;
};

export type Home = {
  front_default: string;
};
