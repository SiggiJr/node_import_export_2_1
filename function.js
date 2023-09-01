export const over100000 = (data) => {
  const filteredData = data.filter((entry) => entry.population >= 100000);
  return filteredData;
};

export const under100000 = (data) => {
  const filteredData = data.filter((entry) => entry.population < 100000);
  return filteredData;
};
