export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  // Get day, month, year
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  // Get hours and minutes
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year} at ${hours}.${minutes}`;
};

export const debounce = (func: any, wait: any) => {
  let timeout: any;
    
  return (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  }
}