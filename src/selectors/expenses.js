import moment from 'moment';
//Get visible expenses(selectors)
export default (expenses, { text, sortBy, startDate, endDate }) => {  //destructuring filters
  return expenses.filter(expense => {
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
      
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
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
