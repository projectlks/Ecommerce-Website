const usePrice = (price, discount) => {
  const originalPrice = () => {
    return (price + (price * discount) / 100).toFixed(2);
  };

  const discountPrice = () => {
    (price * item.discount) / 100;
  };

  return { originalPrice, discountPrice };
};


// const totalCost = cart
// .reduce(
//   (total, item) =>
//     total +
//     (item.price + (item.price * item.discountPercentage) / 100) *
//       item.amount,
//   0
// )
// .toFixed(2);
// const totalDiscount = cart
// .reduce(
//   (total, item) =>
//     total + ((item.price * item.discountPercentage) / 100) * item.amount,
//   0
// )
// .toFixed(2);
// const tax = ((totalCost - totalDiscount) * 0.05).toFixed(2);

// const finalTotal = (
// parseFloat(totalCost) -
// parseFloat(totalDiscount) +
// parseFloat(tax)
// ).toFixed(2);