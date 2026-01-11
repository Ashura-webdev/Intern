export function calculatePrice(weight, express) {
  let base = 50;
  let weightCost = weight * 5;
  let expressCost = express ? 40 : 0;
  return base + weightCost + expressCost;
}

