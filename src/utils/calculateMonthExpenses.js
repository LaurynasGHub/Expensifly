export function calculateMonthExpenses(data, month) {
  let calcPrice = 0;
  let priceArray = [];

  data
    .filter((item) => {
      return item.month.toLowerCase().includes(month);
    })
    .map((item) => priceArray.push(parseFloat(item.price)));

  for (let i = 0; i < priceArray.length; i++) {
    calcPrice += priceArray[i];
  }

  return calcPrice.toFixed(2);
}
