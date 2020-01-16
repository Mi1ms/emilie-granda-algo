const argv = process.argv;

if (argv[2]) {
  const string = argv[2];
  let reverse = [];

  for (var i = string.length; 0 < i; i--) {
    const letter = string[i-1];
    reverse.push(letter);
  }
  const newStr = reverse.join('');
  console.log(newStr);
  return newStr;
}
