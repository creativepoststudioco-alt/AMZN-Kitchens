/* =============================================================
   AMZN KITCHENS — PRODUCT DATA FILE
   -------------------------------------------------------------
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO MANAGE PRODUCTS.

   To ADD a product    -> copy a block below and change the values.
   To EDIT a product   -> change the text / image / links.
   To REMOVE a product -> delete its whole { ... } block.

   FIELDS
   id            Unique short id (letters, numbers, dashes). Used in the page URL.
   name          Product name shown on the card and details page.
   image         EVERY PRODUCT HAS ITS OWN INDEPENDENT IMAGE.
                 Put your photo in  public/products/  and write
                 image: "/products/my-photo.jpg"
                 (or paste any direct image URL).
                 Changing one product's image never affects another.
                 Leave it as ""  -> an "Image coming soon" placeholder shows.
   shortDesc     One line shown on the product card.
   longDesc      Full paragraph shown on the product details page.
   features      Bullet list of key features (add or remove lines freely).
   amazonIN      Your Amazon.in affiliate URL. Leave as "" if not ready.
   amazonUS      Your Amazon.com affiliate URL. Leave as "" if not ready.

   If a country link is "" the site automatically shows
   "Link coming soon" instead of a broken button.
   ============================================================= */

export type Product = {
  id: string;
  name: string;
  image: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  amazonIN: string;
  amazonUS: string;
};

/* Helper for the demo photos only. Replace `img(...)` with your own
   image URL or "/products/your-image.jpg" whenever you like. */
const img = (id: number, ext: "jpeg" | "png" = "jpeg") =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.${ext}?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop`;

export const products: Product[] = [
  {
    id: "fullstar-8-in-1-chopper",
    name: "Fullstar Pro Original Vegetable Chopper & Mandoline Slicer 8-in-1 Prep Tool",
    image: "https://m.media-amazon.com/images/I/81KgX4sBaNL._AC_SL1500_.jpg",
    shortDesc: "All-in-one kitchen gadget to chop, slice, dice, and spiralize effortlessly.",
    longDesc:
      "The Fullstar 8-in-1 kitchen food chopper combines versatile chopping, dicing, slicing, and spiralizing functions into one compact tool. Built with heavy-duty stainless steel blades and food-grade materials, it drastically cuts down your meal prep time while keeping your kitchen counter clean and organized.",
    features: [
      "8 versatile interchangeable blades for chopping, slicing, and spiralizing",
      "Heavy-duty rust-resistant stainless steel blades",
      "Ergonomic design with non-slip base for safe operation",
      "Built-in catch container to keep counters mess-free",
      "Easy to clean, dishwasher safe, and BPA-free",
    ],
    amazonIN: "https://link.amazon/B01ehXD8E",
    amazonUS: "https://link.amazon/B01SzEsuL",
  },
  {
    id: "veg-chopper-pro",
    name: "5-in-1 Vegetable Chopper Pro",
    image: img(32446431),
    shortDesc: "Dice onions, garlic and veggies in a single press.",
    longDesc:
      "A heavy-duty manual vegetable chopper with five interchangeable stainless steel blades. One firm press turns onions, tomatoes, carrots and garlic into perfectly even cubes, saving you several minutes on every meal. The sealed catch container keeps your counter clean and doubles as a fridge storage box.",
    features: [
      "5 interchangeable stainless steel blade cartridges",
      "Non-slip base stays put while chopping",
      "1.2 L catch container with sealing lid",
      "Dishwasher safe and BPA-free",
    ],
    amazonIN: "",
    amazonUS: "",
  },
  {
    id: "mandoline-slicer",
    name: "Adjustable Mandoline Slicer",
    image: img(28321366),
    shortDesc: "Paper-thin to thick slices with one dial twist.",
    longDesc:
      "Restaurant-style slicing at home. A single dial adjusts the cutting thickness from 1 mm crisps to 8 mm wedges, while the included hand guard keeps your fingers safely away from the Japanese steel blade.",
    features: [
      "Dial-adjustable 1–8 mm thickness",
      "Razor-sharp Japanese stainless blade",
      "Safety hand guard included",
      "Folds flat for drawer storage",
    ],
    amazonIN: "",
    amazonUS: "",
  },
  {
    id: "airtight-storage-set",
    name: "Airtight Storage Container Set",
    image: img(13969206),
    shortDesc: "Keeps flour, rice and snacks fresh for months.",
    longDesc:
      "A stackable set of crystal-clear containers with four-sided locking lids and silicone gaskets. Perfect for pantry staples like rice, atta, pasta and cereal, they keep moisture and pests out while letting you see exactly what is inside.",
    features: [
      "Four-side locking airtight lids",
      "Stackable, space-saving square shape",
      "Shatter-resistant and crystal clear",
      "Set of 6 assorted sizes",
    ],
    amazonIN: "",
    amazonUS: "",
  },
  {
    id: "nonstick-frypan",
    name: "Granite Non-Stick Frying Pan",
    image: img(39624859),
    shortDesc: "Cook with almost no oil — nothing sticks.",
    longDesc:
      "A forged aluminium pan with a five-layer granite non-stick coating that releases eggs, dosas and fish effortlessly. The thick induction base spreads heat evenly so nothing burns in the middle, and the riveted bakelite handle stays cool.",
    features: [
      "5-layer PFOA-free granite coating",
      "Induction and gas compatible",
      "Even-heat 4.5 mm forged base",
      "Stay-cool ergonomic handle",
    ],
    amazonIN: "",
    amazonUS: "",
  },
  {
    id: "stock-pot-steel",
    name: "Triply Stainless Steel Stock Pot",
    image: img(27569266, "png"),
    shortDesc: "Soups, stews and curries without scorching.",
    longDesc:
      "A triply pot with an aluminium core sandwiched between stainless steel layers for fast, even heating. The tempered glass lid lets you watch without losing steam, and the riveted handles stay secure even when the pot is full.",
    features: [
      "Triply base for even heat",
      "Tempered glass lid with steam vent",
      "Oven safe up to 220°C",
      "Works on induction and gas",
    ],
    amazonIN: "",
    amazonUS: "",
  },
  {
    id: "nesting-mixing-bowls",
    name: "Nesting Mixing Bowl Trio",
    image: img(6246099),
    shortDesc: "Three bowls that nest into the space of one.",
    longDesc:
      "A beautifully glazed ceramic trio for mixing, marinating and serving. The bowls nest neatly inside each other so they occupy a single shelf slot, and the wide rims make pouring batter mess-free.",
    features: [
      "Set of 3 nesting bowls (0.6 L / 1.2 L / 2 L)",
      "Chip-resistant glazed stoneware",
      "Microwave and dishwasher safe",
      "Drip-free pouring rim",
    ],
    amazonIN: "",
    amazonUS: "",
  },
  {
    id: "chef-knife",
    name: "Precision Chef's Knife",
    image: img(35828604),
    shortDesc: "A razor-sharp everyday blade that holds its edge.",
    longDesc:
      "A full-tang 8-inch chef's knife ground to a 15-degree edge for effortless slicing. The balanced bolster makes long prep sessions comfortable, and the high-carbon steel keeps its sharpness far longer than standard kitchen knives.",
    features: [
      "8-inch high-carbon stainless blade",
      "15° ultra-sharp edge",
      "Full-tang balanced construction",
      "Protective sheath included",
    ],
    amazonIN: "",
    amazonUS: "",
  },
  {
    id: "egg-separator-set",
    name: "Egg Separator & Whisk Set",
    image: img(31452867),
    shortDesc: "Separate yolks and whip cream in seconds.",
    longDesc:
      "A clever two-piece baking helper: a slotted separator that catches yolks perfectly every time, plus a balloon whisk with 12 stainless wires for fast, fluffy whipping.",
    features: [
      "Drip-free yolk separator",
      "12-wire balloon whisk",
      "Rust-proof stainless steel",
      "Hanging loops for easy storage",
    ],
    amazonIN: "",
    amazonUS: "",
  },
  {
    id: "baking-prep-kit",
    name: "Complete Baking Prep Kit",
    image: img(7111399),
    shortDesc: "Everything you need for pies, cakes and cookies.",
    longDesc:
      "A thoughtfully assembled baking kit with measuring spoons, a pastry brush, a dough scraper, a sifter and a silicone spatula — the five tools home bakers reach for again and again.",
    features: [
      "5 essential baking tools",
      "Heat-safe silicone to 230°C",
      "Accurate stainless measuring spoons",
      "Easy-clean, dishwasher safe",
    ],
    amazonIN: "",
    amazonUS: "",
  },
  {
    id: "collapsible-colander",
    name: "Collapsible Silicone Colander",
    image: img(4226805),
    shortDesc: "Drains fast, then folds flat for storage.",
    longDesc:
      "Rinse vegetables and drain pasta in a sturdy colander that collapses to under 4 cm tall. The food-grade silicone body is heat resistant, and the steel-reinforced rim keeps it rigid while full.",
    features: [
      "Folds flat to 4 cm",
      "Heat resistant to 230°C",
      "Steel-reinforced rim and handles",
      "Non-slip resting feet",
    ],
    amazonIN: "",
    amazonUS: "",
  },
  {
    id: "oil-sauce-dispenser",
    name: "Drip-Free Oil & Sauce Dispenser",
    image: img(6493568),
    shortDesc: "Pour the exact amount — zero mess on the counter.",
    longDesc:
      "A glass dispenser with an automatic flip-top spout that seals after each pour, keeping oil fresh and your worktop spotless. Measurement markings help you cook lighter with controlled portions.",
    features: [
      "Auto-sealing drip-free spout",
      "500 ml marked glass body",
      "Dust-proof cap keeps oil fresh",
      "Fits comfortably in one hand",
    ],
    amazonIN: "",
    amazonUS: "",
  },
  {
    id: "magnetic-spice-pods",
    name: "Magnetic Spice Pod Set",
    image: img(39585493),
    shortDesc: "Stick your spices to the fridge, free the drawer.",
    longDesc:
      "Twelve compact pods with strong rear magnets and clear sift-or-pour lids. They attach to the fridge or any steel surface, turning wasted vertical space into an instantly reachable spice rack.",
    features: [
      "Set of 12 magnetic pods",
      "Sift or pour dual lid",
      "Reusable label stickers included",
      "Strong neodymium magnets",
    ],
    amazonIN: "",
    amazonUS: "",
  },
  {
    id: "compact-stove-organiser",
    name: "Compact Stove-Side Organiser",
    image: img(16927367),
    shortDesc: "Keeps pots, lids and tools within arm's reach.",
    longDesc:
      "A powder-coated steel rack that sits beside the hob and holds lids, ladles and small pans upright. Adjustable dividers let you configure it around the cookware you actually own.",
    features: [
      "Adjustable dividers",
      "Rust-resistant powder coating",
      "Non-scratch rubber feet",
      "Assembles in under 2 minutes",
    ],
    amazonIN: "",
    amazonUS: "",
  },
  {
    id: "microwave-steam-set",
    name: "Microwave Steam Cooker Set",
    image: img(16927363),
    shortDesc: "Steam vegetables and rice in minutes, no stove.",
    longDesc:
      "A vented two-tier microwave cooker that steams vegetables, fish and rice without added oil. Ideal for small kitchens, hostels and quick weekday meals.",
    features: [
      "Two-tier steaming trays",
      "Pressure-release vented lid",
      "Cool-touch side handles",
      "Dishwasher safe, BPA-free",
    ],
    amazonIN: "",
    amazonUS: "",
  },
  {
    id: "pour-over-coffee-kettle",
    name: "Gooseneck Pour-Over Coffee Kettle",
    image: img(37552794),
    shortDesc: "Café-quality control over every pour.",
    longDesc:
      "A matte-black stainless kettle with a precision gooseneck spout for slow, even saturation of your coffee bed. The counterbalanced handle gives you steady control from first bloom to final pour.",
    features: [
      "Precision gooseneck spout",
      "1 L stainless steel body",
      "Counterbalanced cool handle",
      "Stovetop and induction ready",
    ],
    amazonIN: "",
    amazonUS: "",
  },
  {
    id: "ceramic-serving-dish",
    name: "Artisan Ceramic Serving Dish",
    image: img(39533489),
    shortDesc: "Oven-to-table serving that looks handmade.",
    longDesc:
      "A hand-finished stoneware dish that moves straight from the oven to the dining table. The dense glaze retains heat so food stays warm through second helpings.",
    features: [
      "Oven safe to 250°C",
      "Heat-retaining stoneware",
      "Food-safe reactive glaze",
      "Easy-grip side handles",
    ],
    amazonIN: "",
    amazonUS: "",
  },
  {
    id: "breakfast-skillet",
    name: "Four-Cup Breakfast Skillet",
    image: img(39964974),
    shortDesc: "Four perfect eggs or pancakes at once.",
    longDesc:
      "A sectioned non-stick skillet that cooks eggs, pancakes and sausages in separate wells at the same time — breakfast for the whole family on one burner.",
    features: [
      "4 separate non-stick wells",
      "Even-heat aluminium body",
      "Works on gas and induction",
      "Wipe-clean coating",
    ],
    amazonIN: "",
    amazonUS: "",
  },
  {
    id: "brass-serving-kadai",
    name: "Traditional Serving Kadai",
    image: img(29685056),
    shortDesc: "Serve curries hot, straight from pan to table.",
    longDesc:
      "A polished serving kadai with a food-safe interior lining that keeps curries piping hot and looking restaurant-worthy. The sturdy riveted handles make serving easy and safe.",
    features: [
      "Food-safe interior lining",
      "Superb heat retention",
      "Riveted sturdy handles",
      "Ideal for dinner-party serving",
    ],
    amazonIN: "",
    amazonUS: "",
  },
  {
    id: "utensil-crock",
    name: "Countertop Utensil Crock",
    image: img(16927318),
    shortDesc: "Every tool upright, visible and instantly grabbable.",
    longDesc:
      "A weighted ceramic crock with an internal divider that stops spatulas and ladles from tangling. Heavy enough that it never tips when you pull a tool out in a hurry.",
    features: [
      "Internal divider for sorting",
      "Weighted no-tip base",
      "Holds 12+ utensils",
      "Wipe-clean glazed finish",
    ],
    amazonIN: "",
    amazonUS: "",
  },
  {
    id: "wall-hook-organiser",
    name: "Wooden Wall Hook Organiser",
    image: img(31152180),
    shortDesc: "Turn empty wall space into tidy storage.",
    longDesc:
      "A solid wood rail with five sturdy hooks for aprons, towels, bags and mugs. Mounts in minutes and instantly clears clutter from your counters and chair backs.",
    features: [
      "Solid wood rail, 5 steel hooks",
      "Holds up to 5 kg per hook",
      "All mounting hardware included",
      "Warm natural oil finish",
    ],
    amazonIN: "",
    amazonUS: "",
  },
  {
    id: "shelf-riser-set",
    name: "Cabinet Shelf Riser Set",
    image: img(39340297),
    shortDesc: "Doubles the usable space in any cupboard.",
    longDesc:
      "Expandable risers that create a second level inside your cabinets, so plates, cans and jars stop forming unstable towers. Width and height both adjust to your shelf.",
    features: [
      "Width and height adjustable",
      "Set of 2 risers",
      "Rust-resistant coated steel",
      "No tools required",
    ],
    amazonIN: "",
    amazonUS: "",
  },
  {
    id: "under-sink-rack",
    name: "Under-Sink Sliding Rack",
    image: img(40005703),
    shortDesc: "Tames the messiest cupboard in the house.",
    longDesc:
      "A two-tier sliding rack designed to fit around under-sink plumbing. The pull-out baskets bring bottles and cleaning supplies to the front instead of leaving them lost at the back.",
    features: [
      "Fits around sink pipes",
      "2 smooth pull-out baskets",
      "Moisture-resistant finish",
      "Tool-free assembly",
    ],
    amazonIN: "",
    amazonUS: "",
  },
  {
    id: "lunch-container-pink",
    name: "Leak-Proof Lunch Container",
    image: img(13969211),
    shortDesc: "Carry curry to work without a single drop escaping.",
    longDesc:
      "A thick-walled container with a silicone-gasket lid and four-clip lock. Microwave safe and freezer ready, it handles everything from gravy-based lunches to overnight oats.",
    features: [
      "Silicone gasket, 4-clip lock",
      "Microwave and freezer safe",
      "BPA-free food-grade body",
      "Stacks neatly in the fridge",
    ],
    amazonIN: "",
    amazonUS: "",
  },
  {
    id: "dish-drying-rack",
    name: "Two-Tier Dish Drying Rack",
    image: img(5556176),
    shortDesc: "Dries a full sink load without crowding the counter.",
    longDesc:
      "A rust-proof two-tier rack with a removable cutlery holder and an angled drip tray that channels water straight into the sink. Holds a complete family dinner's worth of dishes.",
    features: [
      "Two tiers plus cutlery caddy",
      "Angled self-draining tray",
      "Rust-proof coated steel",
      "Non-slip feet protect counters",
    ],
    amazonIN: "",
    amazonUS: "",
  },
  {
    id: "fridge-storage-bins",
    name: "Stackable Fridge Storage Bins",
    image: img(13969210),
    shortDesc: "Find anything in your fridge at a glance.",
    longDesc:
      "Clear stackable bins with built-in handles that group yoghurt, sauces and vegetables into tidy pull-out sections, so nothing hides at the back and spoils.",
    features: [
      "Set of 4 clear bins",
      "Built-in pull handles",
      "Stackable and freezer safe",
      "Easy to rinse clean",
    ],
    amazonIN: "",
    amazonUS: "",
  },
  {
    id: "small-items-organiser",
    name: "Small Essentials Organiser Jars",
    image: img(13968283),
    shortDesc: "Tidy storage for the tiny things that go missing.",
    longDesc:
      "A set of compact lidded jars for cotton buds, clips, tea bags and spices. The coloured lids make it easy to identify contents at a glance on an open shelf.",
    features: [
      "Set of 3 lidded jars",
      "Airtight press-on lids",
      "Shatter-resistant body",
      "Stackable for shelf storage",
    ],
    amazonIN: "",
    amazonUS: "",
  },
  {
    id: "kitchen-cleaning-kit",
    name: "Kitchen Deep-Clean Kit",
    image: img(9230316),
    shortDesc: "Cuts baked-on grease without harsh scrubbing.",
    longDesc:
      "A complete cleaning bundle: a degreasing spray, two microfibre cloths and a non-scratch scrub pad that lifts burnt residue off hobs, tiles and chimney filters.",
    features: [
      "Powerful kitchen degreaser",
      "2 lint-free microfibre cloths",
      "Non-scratch scrubbing pad",
      "Safe on steel and glass",
    ],
    amazonIN: "",
    amazonUS: "",
  },
  {
    id: "meal-prep-boxes",
    name: "Meal Prep Box Set",
    image: img(13968353),
    shortDesc: "Prep the whole week in one Sunday session.",
    longDesc:
      "Evenly portioned boxes with snap-on lids, built for batch cooking. They stack perfectly in the fridge and go from freezer to microwave without warping or staining.",
    features: [
      "Set of 5 portion boxes",
      "Freezer to microwave safe",
      "Stain and odour resistant",
      "Snap-on secure lids",
    ],
    amazonIN: "",
    amazonUS: "",
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
