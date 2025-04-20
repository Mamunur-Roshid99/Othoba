const products = [
  {
    id: 1,
    name: "10 Pcs Elastic Cartoon Rubber Band For Girls",
    image:
      "https://images.othoba.com/images/thumbs/0731473_10-pcs-elastic-cartoon-rubber-band-for-girls_300.webp",
    price: 99,
    sold: 11,
    reviews: 0,
  },
  {
    id: 2,
    name: "60 pcs Colorful Elastic Hair Bands Rubber",
    image:
      "https://images.othoba.com/images/thumbs/0731458_60-pcs-colorful-elastic-hair-bands-rubber-band-nylon-hair-accessories-for-kids_300.webp",
    price: 99,
    priceoff: 120,
    sold: 52,
    reviews: 0,
  },
  {
    id: 3,
    name: "100 Pcs Rubber Bands for Girls Elastic Hair Bands for",
    image:
      "https://images.othoba.com/images/thumbs/0731431_100-pcs-rubber-bands-for-girls-elastic-hair-bands-for-children-mixed-colors-mini-ponytail-holder-bab_300.webp",
    price: 99,
    priceoff: 120,
    sold: 39,
    reviews: 0,
  },
  {
    id: 4,
    name: "Wooden Train Puzzle Jigsaw Safe Wood Training",
    image:
      "https://images.othoba.com/images/thumbs/0721230_wooden-train-puzzle-jigsaw-safe-wood-training-imagination-puzzles-toy-for-toddlers-kids_300.webp",
    price: 56,
    priceoff: 70,
    sold: 9,
    reviews: 0,
  },
  {
    id: 5,
    name: "Star shaped Earrings Red Star 925 Silver Post",
    image:
      "https://images.othoba.com/images/thumbs/0721157_star-shaped-earrings-red-star-925-silver-post_300.webp",
    price: 72,
    priceoff: 90,
    sold: 39,
    reviews: 0,
  },
  {
    id: 6,
    name: "Moving Emoji-Shaped Character for Car",
    image:
      "https://images.othoba.com/images/thumbs/0721222_moving-emoji-shaped-character-for-car-dashboard-work-desk-study-table_300.webp",
    price: 65,
    priceoff: 100,
    sold: 38,
    reviews: 0,
  },
  {
    id: 7,
    name: "Gold Pocket Mirror",
    image:
      "https://images.othoba.com/images/thumbs/0721152_gold-pocket-mirror_300.webp",
    price: 50,
    priceoff: 80,
    sold: 22,
    reviews: 0,
  },
  {
    id: 8,
    name: "Nail Polish Show Myself Red",
    image:
      "https://images.othoba.com/images/thumbs/0711699_nail-polish-show-myself-red_300.jpeg",
    price: 99,
    sold: 49,
    reviews: 0,
  },
  {
    id: 9,
    name: "Zhi Hong Barrette Clips For Girls Bellflower Shaped",
    image:
      "https://images.othoba.com/images/thumbs/0711584_zhi-hong-barrette-clips-for-girls-bellflower-shaped-white-stone-design_300.jpeg",
    price: 99,
    sold: 13,
    reviews: 0,
  },
  {
    id: 10,
    name: "Giant Floor Puzzle Cutout Images 500 pcs",
    image:
      "https://images.othoba.com/images/thumbs/0731676_giant-floor-puzzle-cutout-images-500-pcs_300.webp",
    price: 700,
    priceoff: 1000,
    sold: 18,
    reviews: 0,
  },
  {
    id: 11,
    name: "Planting set for kids Educational way of plantig",
    image:
      "https://images.othoba.com/images/thumbs/0731633_planting-set-for-kids-educational-way-of-plantig-trees-for-kids_300.webp",
    price: 350,
    priceoff: 500,
    sold: 37,
    reviews: 0,
  },
  {
    id: 12,
    name: "Dinosaur Squishy Toy",
    image:
      "https://images.othoba.com/images/thumbs/0731572_dinosaur-squishy-toy_300.webp",
    price: 350,
    priceoff: 500,
    sold: 42,
    reviews: 0,
  },
  {
    id: 13,
    name: "Cute OffWhite Teddy Bear Stuffed Toy with Pink &",
    image:
      "https://images.othoba.com/images/thumbs/0711203_cute-offwhite-teddy-bear-stuffed-toy-with-pink-black-stripe-heart_300.jpeg",
    price: 252,
    priceoff: 360,
    sold: 10,
    reviews: 0,
  },
  {
    id: 14,
    name: "Cute OffWhite Teddy Bear Stuffed Toy with Pink &",
    image:
      "https://images.othoba.com/images/thumbs/0711201_cute-offwhite-teddy-bear-stuffed-toy-with-pink-black-heart_300.jpeg",
    price: 252,
    priceoff: 360,
    sold: 18,
    reviews: 0,
  },
  {
    id: 15,
    name: "Cute Brown Teddy Bear Stuffed Toy with Red Heart",
    image:
      "https://images.othoba.com/images/thumbs/0711193_cute-brown-teddy-bear-stuffed-toy-with-red-heart_300.jpeg",
    price: 252,
    priceoff: 360,
    sold: 18,
    reviews: 0,
  },
  {
    id: 16,
    name: "Creative Cartoon Strawberry Bear Stickers",
    image:
      "https://images.othoba.com/images/thumbs/0721257_creative-cartoon-strawberry-bear-stickers_300.webp",
    price: 120,
    priceoff: 150,
    sold: 42,
    reviews: 0,
  },
  {
    id: 17,
    name: "Key Ring Accessories Cartoon Anime Figure",
    image:
      "https://images.othoba.com/images/thumbs/0721252_key-ring-accessories-cartoon-anime-figure-character-keychain_300.webp",
    price: 120,
    priceoff: 150,
    sold: 30,
    reviews: 0,
  },
  {
    id: 18,
    name: "Mickey Mouse Key Ring Accessories Cartoon",
    image:
      "https://images.othoba.com/images/thumbs/0721251_mickey-mouse-key-ring-accessories-cartoon-figure-character-keychain_300.webp",
    price: 120,
    priceoff: 150,
    sold: 35,
    reviews: 0,
  },
  {
    id: 19,
    name: "Japanese Style Key Ring Accessories Cartoon",
    image:
      "https://images.othoba.com/images/thumbs/0721250_japanese-style-key-ring-accessories-cartoon-anime-figure-character-keychain_300.webp",
    price: 120,
    priceoff: 150,
    sold: 8,
    reviews: 0,
  },
  {
    id: 20,
    name: "Spoon Shape Egg Yolk Separator Green",
    image:
      "https://images.othoba.com/images/thumbs/0721248_spoon-shape-egg-yolk-separator-green_300.webp",
    price: 28,
    priceoff: 35,
    sold: 17,
    reviews: 0,
  },
  {
    id: 21,
    name: "Table Tennis Racket with ball",
    image:
      "https://images.othoba.com/images/thumbs/0731674_table-tennis-racket-with-ball_300.webp",
    price: 500,
    priceoff: 600,
    sold: 40,
    reviews: 0,
  },
  {
    id: 22,
    name: "Cartoon Print Mini Glitter Snow Storm",
    image:
      "https://images.othoba.com/images/thumbs/0731672_cartoon-print-mini-glitter-snow-storm_300.webp",
    price: 250,
    priceoff: 400,
    sold: 40,
    reviews: 0,
  },
  {
    id: 23,
    name: "Unicorn Print Medium Glitter Snow Storm",
    image:
      "https://images.othoba.com/images/thumbs/0731670_unicorn-print-medium-glitter-snow-storm_300.webp",
    price: 400,
    priceoff: 500,
    sold: 40,
    reviews: 0,
  },
  {
    id: 24,
    name: "Forest Print Large Glitter Snow Storm",
    image:
      "https://images.othoba.com/images/thumbs/0731668_forest-print-large-glitter-snow-storm_300.webp",
    price: 500,
    priceoff: 600,
    sold: 27,
    reviews: 0,
  },
];

export default products;