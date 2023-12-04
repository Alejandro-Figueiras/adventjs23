function manufacture(gifts, materials) {
  // Code here
  let regalosOk = [];
  for (const gift of gifts) {
    let posible = true;
    for (const letra of gift) {
      if (!materials.includes(letra)) {
        posible = false;
      }
    }
    if (posible) regalosOk.push(gift);
  }
  return regalosOk;
}