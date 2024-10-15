import { useEffect, useState } from "react";

interface Product {
  name: string;
  id: string;
  price: number;
  description: string;
  pictures: string[];
  quantities: number;
}

interface Cart {
  id: string;
  product: Product;
  quantities: number;
}

const ShoppingCart: React.FC = () => {
  const [cart, setCart] = useState<Cart[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("http//fakeapi");
        if (!response.ok) {
          throw new Error("Fail to load product");
        }

        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      if ((prev.product.id = product.id)) {
        [...prev, [prev.product, (quantities += 1)]];
      } else {
        [...prev, [...product]];
      }
    });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {products.map((product: Product) => (
        <div className="product-card">
          <img src={product.pictures[0]}></img>
          <div>{product.name}</div>
          <div>{product.quantities}</div>
          <div>{product.price}</div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
