import z from "zod";

const abilitySchema = z.object({
  ability: z.object({
    name: z.string(),
    url: z.string(),
  }),
  is_hidden: z.boolean(),
  slot: z.number(),
});

const spriteSchema = z.object({
  back_default: z.string(),
  back_shiny: z.string(),
  front_default: z.string(),
  front_shiny: z.string(),
  other: z.object({
    home: z.object({
      front_default: z.string(),
    }),
  }),
});

export const pokemonDetailSchema = z.object({
  abilities: z.array(abilitySchema),
  name: z.string(),
  sprites: spriteSchema,
});

export const pokemonListSchema = z.object({
  count: z.number(),
  next: z.string(),
  previous: z.string(),
  results: z.array(
    z.object({
      name: z.string(),
      url: z.string(),
    })
  ),
});
