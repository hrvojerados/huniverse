
export function formatDate(dateString) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const [year, month, day] = dateString.split("-").map(Number);
  const monthName = months[month - 1];

  return `${monthName} ${day}, ${year}`;
}

export function hasIntersection(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}
