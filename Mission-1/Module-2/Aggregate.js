const surveyData = ["A", "A", "C", "C", "A", "A", "B", "B", "B", "D", "A"];

const count = surveyData.reduce((accmulatore, data) => {
  //   console.log(table,response);
  if (accmulatore[data]) {
    accmulatore[data] = accmulatore[data] + 1;
  } else {
    accmulatore[data] = 1;
  }

  return accmulatore;
}, {});

// console.log(count);

const sales = [
  { category: "Electronic", item: "Laptop", price: "1200", quantity: 1 },
  { category: "Books", item: "Next js", price: "120", quantity: 2 },
  { category: "Electronic", item: "Mouse", price: "100", quantity: 2 },
  { category: "Home", item: "Chair", price: "200", quantity: 1 },
  { category: "Books", item: "Node js", price: "200", quantity: 1 },
  { category: "Electronic", item: "Keyboard", price: "200", quantity: 2 },
];

const totalSalesByCategory = sales.reduce((acc, sale) => {
  const { category, price, quantity } = sale;
  if (!acc[category]) {
    acc[category] = {
      totalRevenue: 0,
      itemCount: 0,
    };
  }

acc[category].totalRevenue+=quantity;
acc[category].itemCount+=quantity

return acc
}, {});


console.log(totalSalesByCategory);