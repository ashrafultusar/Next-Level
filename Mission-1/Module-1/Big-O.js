// // time complisity
const startTime = performance.now();

for (i = 0; i <= 5000; i++) {
  console.log(i);
}

const endTime = performance.now();

console.log(`this code showing ${endTime - startTime} ms`);

// // 2
console.time("task");

for (let i = 0; i <= 5000; i++) {
  console.log(i);
}

console.timeEnd("task");

// // 3
const firstArray = [];
const secondArray = [];

for (let i = 0; i < 60000; i++) {
  if (i < 30000) {
    firstArray.push(i);
  }

  secondArray.push(i);
}

console.log('first array length',firstArray.length);
console.log('second array length',secondArray.length);

console.time('map1')
const firstUserList=firstArray.map((number)=>({userId:number}))
console.timeEnd('map1')

console.time('map2')
const secondUserList=secondArray.map((number)=>({userId:number}))
console.timeEnd('map2')






