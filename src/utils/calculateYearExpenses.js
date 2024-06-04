export function calculateYearExpenses(data, year, userId) {
  let calcPrice = 0;
  let priceArray = [];

  data
    .filter((item) => {
      return String(item.year).includes(year);
    })
    .filter((item) => {
      return item.userId === userId;
    })
    .map((item) => priceArray.push(parseFloat(item.price)));

  for (let i = 0; i < priceArray.length; i++) {
    calcPrice += priceArray[i];
  }

  return calcPrice.toFixed(2);
}
