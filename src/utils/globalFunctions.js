export const getCurrentDateFormatted = () => {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = currentDate.getFullYear();
  const hour = String(currentDate.getHours()).padStart(2, '0');
  const minute = String(currentDate.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year} - ${hour}:${minute}`;
};
