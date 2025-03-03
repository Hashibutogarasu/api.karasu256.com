import { z } from "zod";

const baseCharacterSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, "Name must be at least 1 character long"),
  rarity: z.number().min(1, "Rarity must be at least 1").nullish(),
  game: z.enum([
    "genshin_impact",
    "honkai_impact_3rd",
    "honkai_star_rail",
  ]),
  description: z.string(),
  birthday: z.string().nullish(),
  cv: z.array(z.object({
    name: z.string(),
    language: z.string(),
  })).nullish(),
  header_image: z.string().url().nullish(),
  icon: z.string().url().nullish(),
  images: z.array(z.string().url()),
  tags: z.array(z.string()),
});

const genshinCharacterSchema = baseCharacterSchema.extend({
  element: z.enum(["anemo", "geo", "electro", "dendro", "hydro", "pyro", "cryo"]),
  weaponType: z.enum(["sword", "claymore", "polearm", "bow", "catalyst"]),
  artifactSets: z.object({
    twoPiecesEffect: z.string(),
    fourPiecesEffect: z.string(),
    icons: z.array(z.string().url()),
  }),
  constellation: z.object({
    name: z.string(),
    effects: z.array(z.object({
      name: z.string(),
      description: z.string(),
      icon: z.string().url(),
    })),
  }),
  talents: z.array(
    z.object({
      name: z.string(),
      description: z.string(),
      image: z.string().url(),
    })
  ),
});

const honkaiImpact3rdCharacterSchema = baseCharacterSchema.extend({
  type: z.enum(["biologic", "physic", "mecha", "quantum", "imaginary", "stardust"]),
  stigmatas: z.array(
    z.object({
      id: z.string().uuid().nullish(),
      name: z.string(),
      rarity: z.number(),
      twoPiecesEffect: z.string(),
      threePiecesEffect: z.string(),
      type: z.enum(["T", "C", "B"]),
    }),
  ),
  skills: z.array(
    z.object({
      id: z.string().uuid().nullish(),
      type: z.string(),
      name: z.string(),
      description: z.string(),
      icon: z.string().url(),
      images: z.array(z.string().url()),
    }),
  ),
});

const honkaiStarRailCharacterTraceBase = z.object({
  type: z.enum(["basicAtk", "talent", "skill", "ultimate", "technique"]),
  name: z.string(),
  description: z.string(),
  image: z.string().url().nullish(),
});

const honkaiStarRailCharacterSchema = baseCharacterSchema.extend({
  relics: z.array(
    z.object({
      id: z.string().uuid().nullish(),
      name: z.string(),
      description: z.string(),
      icon: z.string().url(),
      twoPiecesEffect: z.string(),
      fourPiecesEffect: z.string(),
    }),
  ),
  splashArt: z.string().url(),
  idleAnimations: z.array(z.string().url()),
  eidolons: z.array(
    z.object({
      id: z.string().uuid().nullish(),
      name: z.string(),
      description: z.string(),
      image: z.string().url(),
    }),
  ),
  traces: z.array(honkaiStarRailCharacterTraceBase),
  videos: z.array(
    z.object({
      title: z.string(),
      url: z.string().url(),
    })
  ),
});

const characterSchema = z.union([
  genshinCharacterSchema.partial().nullish(),
  honkaiImpact3rdCharacterSchema.partial().nullish(),
  honkaiStarRailCharacterSchema.partial().nullish(),
]);

type Character = z.infer<typeof characterSchema>;

const createCharacterSchema = characterSchema;

type CreateCharacterDto = z.infer<typeof createCharacterSchema>;

const updateCharacterSchema = characterSchema.and(baseCharacterSchema.partial().extend({
  id: z.string().uuid()
}));

type UpdateCharacterDto = z.infer<typeof updateCharacterSchema>;

export {
  createCharacterSchema,
  updateCharacterSchema,
  characterSchema,
  Character,
  CreateCharacterDto,
  UpdateCharacterDto
}