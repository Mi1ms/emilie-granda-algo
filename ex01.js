const argv = process.argv;

if (argv[2]) {
  const string = argv[2];
  let unique = true;

  for (var i= 0; i < string.length; i++) {
    const letter = string[i];
    for (var a= i+1; a < string.length; a++) {
      if (letter == string[a]) {
        unique = false
      }
    }
  }
  console.log(unique);
  return unique;
}
