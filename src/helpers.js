// Convert time to hours and minutes
export const calcTime = time => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = money => {
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumSignificantDigits: 3,
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};

export const isPersistedState = stateName => {
  const sessionState = sessionStorage.getItem(stateName);
  return sessionStorage && JSON.parse(sessionState);
};
