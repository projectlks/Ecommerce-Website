const usePrice = (price, discount) => {
  const originalPrice = () => {
    return (price + (price * discount) / 100).toFixed(2);
  };

  const discountPrice = () => {
    (price * item.discount) / 100;
  };

  return { originalPrice, discountPrice };
};