export const boldSpecificName = (inputString, nameToBold) => {
  const parts = inputString.split(nameToBold);
  return parts.reduce((acc, part, idx) => {
    if (idx > 0) {
      acc.push(<b key={idx}>{nameToBold}</b>);
    }
    acc.push(part);
    return acc;
  }, []);
};