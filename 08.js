const secret_text = "23dn3ir30fd2eddd";
masking(secret_text);

function masking(string) {
  let arr = string.split("");
  for (let i = 0; i < arr.length - 3; i++) {
    arr[i] = "*";
  }

  console.log(arr.join(""));
}
