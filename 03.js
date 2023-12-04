function findNaughtyStep(original, modified) {
  // Code here
  if (original.length > modified.length) {

    for (let i = 0; i < modified.length; i++) {
      if (original[i] != modified[i]) return original[i];
    }
    return original[original.length-1];

  } else if (original.length < modified.length) {

    for (let i = 0; i < original.length; i++) {
      if (original[i] != modified[i]) return modified[i];
    }
    return modified[modified.length-1];

  }
  return ''
}