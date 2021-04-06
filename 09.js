const arrayList = [3, 12, 4, 5, 8, 9];
const sortMethod = (items) => {
  items.sort((a, b) => {
    return a - b;
  });
  return items;
};
sortMethod(arrayList);
