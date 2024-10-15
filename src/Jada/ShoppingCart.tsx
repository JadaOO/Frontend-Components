import { useEffect, useState } from "react";
import { productList } from "./seeds";

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
    const fetchProduct = () => {
      try {
        const data: Product[] = productList;
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const exsitingItem = prev.find((item) => item.product.id === product.id);
      if (exsitingItem) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantities: item.quantities + 1 }
            : item
        );
      } else {
        return [...prev, { id: product.id, product, quantities: 1 }];
      }
    });
  };

  const removeFromCart = (product: Product) => {
    setCart((prev) => {
      return prev.filter((item) => item.product.id !== product.id);
    });
  };

  const removeQuan = (product: Product) => {
    setCart((prev) => {
      const newCart = prev.map((item) =>
        item.product.id === product.id
          ? { ...item, quantities: item.quantities - 1 }
          : item
      );
      return newCart.filter((item) => item.quantities > 0);
    });
  };

  const priceCal = (price: number, quan: number) => {
    return (price * quan).toFixed(4);
  };

  const totalPrice = () => {
    return cart
      .reduce(
        (total, item) => total + item.product.quantities * item.product.price,
        0
      )
      .toFixed(2);
  };

  const calculateTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.product.price * item.quantities, 0)
      .toFixed(2); // Calculate total price
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
          <button onClick={() => addToCart(product)}>Add</button>
          <button onClick={() => removeQuan(product)}>Remove</button>
        </div>
      ))}
      <div>------------------------------------</div>
      {cart &&
        cart.map((cart: Cart) => (
          <div>
            {cart.product.name}
            {cart.quantities}
            {`price:$${priceCal(cart.product.price, cart.quantities)}`}
            {`Total price:$${calculateTotalPrice()}`}
            <button onClick={() => addToCart(cart.product)}>Add</button>
            <button onClick={() => removeFromCart(cart.product)}>Remove</button>
          </div>
        ))}
    </div>
  );
};

export default ShoppingCart;
