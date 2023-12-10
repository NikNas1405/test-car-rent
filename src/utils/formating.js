export const formatNumber = number => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatPriceSelect = string => {
  return string.split('$')[1].toString();
};
