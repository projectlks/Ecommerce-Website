// hooks/useCartTotals.tsx
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

interface CartItem {
  price: number;
  discountPercentage: number;
  amount: number;
}

const useCartTotals = () => {
  const { cart } = useContext(CartContext);

  const { totalCost, totalDiscount } = cart.reduce(
    (acc: { totalCost: number; totalDiscount: number }, item: CartItem) => {
      const discountedPrice = item.price - (item.price * item.discountPercentage) / 100;
      const itemTotalCost = discountedPrice * item.amount;
      const itemTotalDiscount = (item.price * item.discountPercentage) / 100 * item.amount;

      return {
        totalCost: acc.totalCost + itemTotalCost,
        totalDiscount: acc.totalDiscount + itemTotalDiscount,
      };
    },
    { totalCost: 0, totalDiscount: 0 }
  );

  const tax = ((totalCost - totalDiscount) * 0.05).toFixed(2);
  const finalTotal = (totalCost - totalDiscount + parseFloat(tax)).toFixed(2);

  return {
    totalCost: totalCost.toFixed(2),
    totalDiscount: totalDiscount.toFixed(2),
    tax,
    finalTotal,
  };
};

export default useCartTotals;
