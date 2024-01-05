export const formatPriceSelect = string => {
  return string.split('$')[1].toString();
};

const generatePriceArr = () => {
  const options = [];
  for (let i = 10; i <= 1000; i += 10) {
    options.push({ value: i, label: `${i}$` });
  }
  return options;
};

export const priceOptions = generatePriceArr();
