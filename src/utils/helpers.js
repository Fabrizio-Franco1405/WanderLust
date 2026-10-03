export const formatPrice = (price, currency = '$') => {
  return `${currency}${price.toLocaleString()}`;
};

export const formatRating = (rating) => {
  return rating.toFixed(1);
};

export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

export const generateId = () => {
  return Math.random().toString(36).substring(2, 15);
};

export const debounce = (func, wait) => {
  let timeout = null;
  return (...args) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};