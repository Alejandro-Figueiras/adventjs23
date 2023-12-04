function decode(message) {
  const msg = message.split("");
  const swap = (a,b) => {
    const tmp = msg[a]; 
    msg[a] = msg[b];
    msg[b] = tmp;
  }
  // Code here
  let stack = [];
  for (let i = 0; i < msg.length; i++) {
    if (msg[i] == '(') {
      stack.push(i);
      msg[i] = ''
    }
    if (msg[i] == ')') {
      msg[i] = ''
      const pos = stack.pop();
      for (let j = 0; j <= (i-pos)/2-1; j++) {
        swap(pos+j+1, i-1-j)
      }
    }
  }
  
  return msg.join("")
}