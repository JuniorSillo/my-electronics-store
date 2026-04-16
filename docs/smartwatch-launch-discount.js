
export function run(input) {
  const cartTotal = parseFloat(input.cart.cost.totalAmount.amount);

  const containsSmartwatch = input.cart.lines.some((line) => {
    return line.merchandise.product.title === "Garmin fenix 8, AMOLED Display GPS Smartwatch";
  });

  if (!containsSmartwatch || cartTotal <= 500) {
    return {
      discountApplicationStrategy: "MAXIMUM",
      discounts: [],
    };
  }

  return {
    discountApplicationStrategy: "MAXIMUM",
    discounts: [
      {
        message: "Launch Day Offer: 10% off your smartwatch order!",
        targets: [
          {
            orderSubtotal: {
              excludedVariantIds: [],
            },
          },
        ],
        value: {
          percentage: {
            value: "10",
          },
        },
      },
    ],
  };
}