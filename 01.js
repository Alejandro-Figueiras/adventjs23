function findFirstRepeated(gifts) {
  // Code here
  let id = -1, index = gifts.length;
  for (let i = 0; i < index; i++) {
    for (let j = i+1; j < index; j++) {
      if (gifts[i] == gifts[j]) {
        id = gifts[i];
        index = j;
        break;
      }
    }
  }
  return id
}