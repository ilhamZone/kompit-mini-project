import z from "zod";

export const pokemonDetailSchema = z.object({
    abilities: z.array(abilitySchema),
    base_experience: z.number(),
    forms: z.array(formSchema),
    game_indices: z.array(gameIndexSchema),
    height: z.number(),
    held_items: z.array(z.any()),
    id: z.number(),
    is_default: z.boolean(),
    location_area_encounters: z.string().url(),
    moves: z.array(moveSchema),
    name: z.string(),
    order: z.number(),
    past_types: z.array(z.any()),
    species: speciesSchema,
    sprites: spriteSchema,
    stats: z.array(statSchema),
    types: z.array(typeSchema),
    weight: z.
  });