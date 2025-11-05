const surveyData = ["A", "A", "C", "C", "A", "A", "B", "B", "B", "D", "A"];

const count = surveyData.reduce((table, response) => {
//   console.log(table,response);

  if (table[response]) {
    table[response] = table[response] + 1;
  } else {
    table[response] = 1;
  }

  return table;
}, {});

console.log(count);

