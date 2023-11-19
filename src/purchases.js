export default function calcelateTotal(purchases) {
  return purchases.reduce((acc, curr) => acc + curr.price * curr.count, 0);
}
