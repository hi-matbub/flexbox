export const handleSort = (nums) => {
  if (!Array.isArray(nums)) {
    return -1;
  }
  if (nums.length < 2) {
    return nums;
  }
  let swapped = false,
    temp = 0,
    count = -1,
    arrLength = 0;

  do {
    count++;
    swapped = false;
    arrLength = nums.length - 1 - count;
    for (let i = 0; i <= arrLength; i++) {
      if (nums[i] > nums[i + 1]) {
        temp = nums[i + 1];
        nums[i + 1] = nums[i];
        nums[i] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return nums;
};
