export interface Product {
  name: string;
  id: string;
  price: number;
  description: string;
  pictures: string[];
  quantities: number;
}

export const productList: Product[] = [
  {
    name: "Classic Denim Jacket",
    id: "DJ001",
    price: 79.99,
    description:
      "A timeless denim jacket with a relaxed fit. Perfect for casual outings.",
    pictures: ["denim-jacket-front.jpg", "denim-jacket-back.jpg"],
    quantities: 25,
  },
  {
    name: "Slim Fit Chinos",
    id: "CH002",
    price: 49.99,
    description:
      "Slim fit chinos made with stretch cotton for maximum comfort.",
    pictures: ["chinos-front.jpg", "chinos-back.jpg"],
    quantities: 50,
  },
  {
    name: "Graphic Print T-Shirt",
    id: "TS003",
    price: 19.99,
    description:
      "A soft cotton t-shirt featuring a unique graphic print design.",
    pictures: ["tshirt-front.jpg", "tshirt-back.jpg"],
    quantities: 100,
  },
  {
    name: "Leather Biker Jacket",
    id: "LJ004",
    price: 129.99,
    description: "A premium leather biker jacket with an edgy, modern look.",
    pictures: ["leather-jacket-front.jpg", "leather-jacket-back.jpg"],
    quantities: 15,
  },
  {
    name: "Plaid Flannel Shirt",
    id: "FS005",
    price: 39.99,
    description:
      "A comfortable flannel shirt in classic plaid patterns, great for layering.",
    pictures: ["flannel-shirt-front.jpg", "flannel-shirt-back.jpg"],
    quantities: 60,
  },
  {
    name: "Maxi Summer Dress",
    id: "SD006",
    price: 59.99,
    description:
      "A flowy maxi dress perfect for summer occasions, featuring floral prints.",
    pictures: ["summer-dress-front.jpg", "summer-dress-back.jpg"],
    quantities: 30,
  },
  {
    name: "Fleece Zip Hoodie",
    id: "ZH007",
    price: 45.99,
    description:
      "A warm fleece hoodie with a full zip for added comfort and style.",
    pictures: ["zip-hoodie-front.jpg", "zip-hoodie-back.jpg"],
    quantities: 40,
  },
  {
    name: "High-Waisted Skinny Jeans",
    id: "SJ008",
    price: 69.99,
    description:
      "High-waisted skinny jeans with a flattering fit, made from stretch denim.",
    pictures: ["skinny-jeans-front.jpg", "skinny-jeans-back.jpg"],
    quantities: 35,
  },
  {
    name: "Wool Knit Sweater",
    id: "KS009",
    price: 89.99,
    description: "A cozy wool knit sweater, ideal for colder weather.",
    pictures: ["knit-sweater-front.jpg", "knit-sweater-back.jpg"],
    quantities: 20,
  },
  {
    name: "Printed A-Line Skirt",
    id: "AS010",
    price: 39.99,
    description: "A playful printed A-line skirt with a flattering silhouette.",
    pictures: ["a-line-skirt-front.jpg", "a-line-skirt-back.jpg"],
    quantities: 45,
  },
];
