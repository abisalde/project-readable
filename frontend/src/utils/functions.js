const sorted = (key) => {
  return (a, b) => (a[key] > b[key] ? -1 : b[key] > a[key] ? 1 : 0);
};

export const handleSortedPosts = (posts, order) => {
  if (order === 'date') {
    return posts?.sort(sorted('timestamp'));
  } else if (order === 'score') {
    return posts?.sort(sorted('voteScore'));
  }
};

const Months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = Months[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};

export const generateId = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};
