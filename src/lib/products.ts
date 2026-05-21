export type Product = {
  handle: string;
  name: string;
  collection: string;
  price: number;
  size: string;
  shortDescription: string;
  description: string;
  keyActives: { name: string; pct: string; role: string }[];
  fullIngredients: string;
  origin: string;
  skinTypes: string[];
  ritual: string;
  images: string[];
};

export type Collection = {
  handle: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
};

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=85&auto=format&fit=crop`;

export const collections: Collection[] = [
  {
    handle: "cleanse",
    name: "Cleanse",
    subtitle: "Step 01",
    description:
      "Cold-pressed botanical oils and surfactants milder than the water you wash them off with.",
    image: u("1599421988813-46e50aee5002"),
  },
  {
    handle: "treat",
    name: "Treat",
    subtitle: "Step 02",
    description:
      "Targeted actives — adaptogens, peptides, retinal — formulated for sensitivity-prone skin.",
    image: u("1715750968540-841103c78d47"),
  },
  {
    handle: "hydrate",
    name: "Hydrate",
    subtitle: "Step 03",
    description:
      "Multi-weight hyaluronic acids and beta-glucan to plump without occluding.",
    image: u("1601066551508-6d9cb1b9de65"),
  },
  {
    handle: "sun",
    name: "Sun",
    subtitle: "Step 04",
    description:
      "Mineral, broad-spectrum, reef-safe. Tested daily under real Mediterranean sun.",
    image: u("1764694071531-008332b61f43"),
  },
];

export const products: Product[] = [
  {
    handle: "rose-geranium-cleanser",
    name: "Rose & Geranium Cleanser",
    collection: "cleanse",
    price: 38,
    size: "150 ml",
    shortDescription:
      "A cold-pressed cleansing oil with damask rose and Egyptian geranium — emulsifies on contact with water.",
    description:
      "A 92% naturally-derived first-cleanse oil. Cold-pressed safflower and jojoba lift sunscreen and sebum; rose centifolia from Grasse and Egyptian geranium calm the routine of cleansing itself. Emulsifies into a soft milk on contact with water and rinses without residue.",
    keyActives: [
      { name: "Rosa Centifolia Oil", pct: "4%", role: "Sourced from Hervé Rohart, Grasse" },
      { name: "Pelargonium Graveolens", pct: "1.5%", role: "Calming, mood-balancing" },
      { name: "Squalane (Olive-Derived)", pct: "8%", role: "Barrier support" },
      { name: "Vitamin E", pct: "0.5%", role: "Antioxidant" },
    ],
    fullIngredients:
      "Helianthus Annuus Seed Oil, Caprylic/Capric Triglyceride, Carthamus Tinctorius Seed Oil, Olea Europaea Squalane, Simmondsia Chinensis Seed Oil, Polyglyceryl-3 Polyricinoleate, Rosa Centifolia Flower Oil, Pelargonium Graveolens Oil, Tocopherol, Bisabolol.",
    origin: "Distilled in Provence, France",
    skinTypes: ["All", "Sensitivity-prone", "Reactive"],
    ritual: "Massage 3 pumps into dry skin for 60 seconds. Add water and rinse. Follow with a water-based cleanser only if you wore makeup or SPF.",
    images: [
      u("1768235146440-1dc7e02132a3", 1400),
      u("1573575155376-b5010099301b", 1400),
      u("1763812770943-0b76492a38f0", 1400),
    ],
  },
  {
    handle: "adaptogen-serum",
    name: "Adaptogen Serum",
    collection: "treat",
    price: 72,
    size: "30 ml",
    shortDescription:
      "A 2% reishi + bakuchiol concentrate. Smooths and evens without the irritation of retinol.",
    description:
      "Our hero serum. A glycerin-water base carries 2% reishi mushroom extract, 0.5% bakuchiol (the plant-source retinol alternative), 1% Centella Asiatica, and a 1% niacinamide. Tested against placebo over 12 weeks in a 41-participant dermatologist study — 89% reported smoother texture, 76% reported more even tone.",
    keyActives: [
      { name: "Reishi (Ganoderma Lucidum)", pct: "2%", role: "Adaptogen, anti-inflammatory" },
      { name: "Bakuchiol", pct: "0.5%", role: "Retinol-alternative, pregnancy-safe" },
      { name: "Centella Asiatica", pct: "1%", role: "Wound healing, barrier" },
      { name: "Niacinamide", pct: "1%", role: "Tone-evening, sebum-regulating" },
    ],
    fullIngredients:
      "Aqua, Glycerin, Propanediol, Ganoderma Lucidum Extract, Niacinamide, Centella Asiatica Extract, Bakuchiol, Sodium Hyaluronate, Panthenol, Allantoin, Tremella Fuciformis Extract, Citric Acid, Tocopherol.",
    origin: "Compounded in Lugano, Switzerland",
    skinTypes: ["All", "Aging", "Hyperpigmented", "Pregnancy-safe"],
    ritual: "Apply 4–5 drops AM and PM to clean, damp skin. Layer under moisturizer. Always pair with SPF in the morning.",
    images: [
      u("1715750968540-841103c78d47", 1400),
      u("1767256046031-743d33937c4e", 1400),
      u("1693734488312-87b12f1cbac2", 1400),
    ],
  },
  {
    handle: "hyaluronic-mist",
    name: "Hyaluronic Mist",
    collection: "hydrate",
    price: 28,
    size: "100 ml",
    shortDescription:
      "A four-weight hyaluronic acid mist. Plumps surface skin without sitting on top of it.",
    description:
      "Four molecular weights of hyaluronic acid — 5kDa, 50kDa, 800kDa, 1.5MDa — distributed to plump at four depths of the stratum corneum. Paired with 2% beta-glucan from Polish oats. A real fine atomiser — not a wet spray.",
    keyActives: [
      { name: "Sodium Hyaluronate (4 weights)", pct: "2%", role: "Hydration, multi-depth" },
      { name: "Beta-Glucan (Oat)", pct: "2%", role: "Soothes, calms reactivity" },
      { name: "Snow Mushroom (Tremella)", pct: "1%", role: "Long-chain plant hydrator" },
      { name: "Allantoin", pct: "0.2%", role: "Barrier comfort" },
    ],
    fullIngredients:
      "Aqua, Sodium Hyaluronate, Beta-Glucan, Tremella Fuciformis Extract, Glycerin, Allantoin, Panthenol, Sodium PCA, Sodium Benzoate, Citric Acid.",
    origin: "Bottled in Kraków, Poland",
    skinTypes: ["All", "Dehydrated", "Travel-stressed"],
    ritual: "Mist 6–8 inches from the face after cleansing, between layers, or anytime skin feels tight. Press in, don't wipe.",
    images: [
      u("1601066551508-6d9cb1b9de65", 1400),
      u("1573575154488-f88a60e170df", 1400),
      u("1767102125499-0ce314436f67", 1400),
    ],
  },
  {
    handle: "mineral-spf-50",
    name: "Mineral SPF 50",
    collection: "sun",
    price: 46,
    size: "50 ml",
    shortDescription:
      "Non-nano zinc oxide 22%. Broad spectrum, reef-safe, no white cast even on deeper skin tones.",
    description:
      "A 100% mineral SPF 50. Non-nano zinc oxide 22%, suspended in a lightweight glycerin-jojoba base with a touch of cosmetic iron oxide so it disappears on every undertone we have tested. Reef-safe, fragrance-free, dermatologist-approved for sensitive and post-procedure skin.",
    keyActives: [
      { name: "Zinc Oxide (Non-Nano)", pct: "22%", role: "Broad-spectrum UV filter" },
      { name: "Niacinamide", pct: "2%", role: "Tone-supporting" },
      { name: "Tocopherol", pct: "1%", role: "Antioxidant" },
      { name: "Bisabolol", pct: "0.5%", role: "Calming" },
    ],
    fullIngredients:
      "Zinc Oxide (Non-Nano), Aqua, Glycerin, Simmondsia Chinensis Seed Oil, Caprylic/Capric Triglyceride, Niacinamide, Iron Oxides, Tocopherol, Bisabolol, Allantoin, Xanthan Gum.",
    origin: "Manufactured in Lugano, Switzerland",
    skinTypes: ["All", "Sensitive", "Post-procedure", "Acne-prone"],
    ritual: "Apply two finger-lengths to face and neck as the final step of your morning routine. Reapply every two hours under direct sun.",
    images: [
      u("1764694071531-008332b61f43", 1400),
      u("1702475139156-6cc9d6bc5898", 1400),
      u("1775640622529-496019ebecc4", 1400),
    ],
  },
];

export function getProduct(handle: string) {
  return products.find((p) => p.handle === handle);
}
export function getCollection(handle: string) {
  return collections.find((c) => c.handle === handle);
}
export function productsInCollection(handle: string) {
  return products.filter((p) => p.collection === handle);
}
