export const handleRemove = (arr, val) => {
  for (let i = arr.length; i--; ) {
    if (arr[i] === val) {
      arr.splice(i, 1);
    }
  }
};
