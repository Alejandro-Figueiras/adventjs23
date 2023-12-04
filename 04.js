function decode(message) {
  const msg = message.split("");
  const swap = (a,b) => {
    const tmp = msg[a];
    msg[a] = msg[b];
    msg[b] = tmp;
    console.log(msg)
  }
  // Code here
  let stack = [];
  for (let i = 0; i < msg.length; i++) {
    if (msg[i] == '(') stack.push(i);
    if (msg[i] == ')') {
      const pos = stack.pop();
      for (let j = 0; j <= (i-pos)/2-1; j++) {
        console.log("encontrado")
        
        swap(pos+j+1, i-1-j)
      }
    }
  }
  
  return msg.join("").split("(").join('').split(')').join("");
}