const action = (data) => {

  if (typeof data !== "object") {
    return;
  }
  for (let i = 0; i <= data.length; i++) {
    if (data[i] >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, data[i] * 1000);
    }
  }
};

console.log(action([4, 6, 7, 9]));