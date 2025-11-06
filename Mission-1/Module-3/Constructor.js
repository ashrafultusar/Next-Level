// closure
const createCounter = () => {
  let count = 0;

  return (amount) => {
    count = count + amount;
    return count;
  };
};

const counter = createCounter();

// console.log(counter(5));
// console.log(counter(7));

class Counter {
  constructor(count) {
    this.count = count;
  }
  add(amount) {
    this.count = this.count + amount;
  }
  print() {
    console.log(this.count);
  }
}

const counter1=new Counter(0)
counter1.add(10)
counter1.add(15)

counter1.print()

const counter2=new Counter(10)

counter2.add(13)
counter2.add(13)

counter2.print()