// const number = [40, 55, 2, 4, 19];

// const fruits = ["Banana", "apple", "Cherry", "date"];

// number.sort((a,b)=>a-b)

// nested arry ke one array te convert korte
const arr = [1, 2, 3, 5, [7, 9]];
const arr1 = [1, 2, 3, 5, [7, 9, [11, 23, 45, [12, 21]]]];

// single nested thakle
const flatArr = arr.flat();
// console.log(flatArr);

// multiple nested thakle
const flatArr1 = arr1.flat(Infinity);
// console.log(flatArr1);


// Array.from()
const range = (start, stop, step) => {
   return Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step
  );
};
// console.log(range(1,10,4));