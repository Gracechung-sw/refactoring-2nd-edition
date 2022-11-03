/**
 * Split Phase
 */
export function priceOrder(product, quantity, shippingMethod) {
  const basePrice = calculateBasePrice(product, quantity);
  const discount = calcuateDiscountedPrice(product, quantity);
  const shippingCost = calculateShippingCost(basePrice, shippingMethod);
  const price = basePrice - discount + shippingCost;
  return price;
}

function calculateBasePrice(product, quantity) {
  return product.basePrice * quantity;
}

function calcuateDiscountedPrice(product, quantity) {
  return (
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate
  );
}

function calculateShippingCost(price, quantity, shippingMethod) {
  const shippingPerCase =
    price > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  return quantity * shippingPerCase;
}

// 사용 예:
const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

const price = priceOrder(product, 5, shippingMethod);
console.log(price);
