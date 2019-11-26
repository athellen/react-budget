export default (expenses, { text, sortBy, startDate, endDate }) => {  //destructuring filters
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};


// function reverse(str){
//     let result1 = [];
//     let index = 0;
//     while (index < str.length) {
// result1.push(str.slice(index, index + 2));
// index += 2;
//     }
//   let result2 = [];

//   for (let i=0; i< str.length; i++){
//   result2.push(result[i][0]);
//   if (result[i][1]) {
//     result2.push(result[i][0].split('').reverse().join(''));
//   }
//   return result2;
// }
// };
