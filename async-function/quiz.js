console.log(1);
setTimeout(() => { console.log(2) }, 0); // Print the last - why???

new Promise((res, _) => { // mới biết viết vầy đc luôn :))))
  console.log(3);
  res(4);
}).then(data => console.log(data));