
const cart = [
  { name: "Notebook", price: "1500", qty: 2 },
  { name: "Pen", price: 300, qty: 5 },
];

function getSubtotal(items) {
  let subtotal = 0;

  // Bug 1 fixed: Use < instead of <= to avoid accessing an index outside the array.
  // Found by reading the TypeError and checking the loop condition.
  for (let i = 0; i < items.length; i++) {
    subtotal += Number(items[i].price) * items[i].qty;
  }

  return subtotal;
}

function getDiscount(subtotal) {
  // Bug 2 fixed: Check the larger discount first so it can be reached.
  // Found by inspecting the order of the conditions.
  if (subtotal > 20000) return 0.2;
  if (subtotal > 10000) return 0.1;
  return 0;
}

function getTotal(items) {
  const subtotal = getSubtotal(items);
  const discountRate = getDiscount(subtotal);

  // Bug 3 fixed: Calculate the discount amount, not just subtract the rate.
  // Found by inspecting the values in getTotal.
  const discountAmount = subtotal * discountRate;
  const total = subtotal - discountAmount;

  return total;
}

// Risky data value: "1500" is a string.
// Multiplication converts it to a number, but + could join strings instead.
console.log("Subtotal:", getSubtotal(cart));
console.log("Discount rate:", getDiscount(getSubtotal(cart)));
console.log("Total:", getTotal(cart));
