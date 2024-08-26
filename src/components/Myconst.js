import { format } from "date-fns";

const baseUrl = `http://127.0.0.1:8000/api`;
const baseAssetsUrl = `http://127.0.0.1:8000/storage/`;

// format timestamp
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return format(date, "d MMM yyyy h:mm a");
};

// format time into 1 min ago format
const timeAgo = (dateString) => {
  const now = new Date();
  const then = new Date(dateString);
  const seconds = Math.floor((now - then) / 1000);

  const interval = {
    year: Math.floor(seconds / (365 * 24 * 60 * 60)),
    month: Math.floor(seconds / (30 * 24 * 60 * 60)),
    week: Math.floor(seconds / (7 * 24 * 60 * 60)),
    day: Math.floor(seconds / (24 * 60 * 60)),
    hour: Math.floor(seconds / (60 * 60)),
    minute: Math.floor(seconds / 60),
    second: Math.floor(seconds),
  };

  if (interval.year > 1) return `${interval.year} years ago`;
  if (interval.year === 1) return "1 year ago";
  if (interval.month > 1) return `${interval.month} months ago`;
  if (interval.month === 1) return "1 month ago";
  if (interval.week > 1) return `${interval.week} weeks ago`;
  if (interval.week === 1) return "1 week ago";
  if (interval.day > 1) return `${interval.day} days ago`;
  if (interval.day === 1) return "1 day ago";
  if (interval.hour > 1) return `${interval.hour} hours ago`;
  if (interval.hour === 1) return "1 hour ago";
  if (interval.minute > 1) return `${interval.minute} minutes ago`;
  if (interval.minute === 1) return "1 minute ago";
  return "Just now";
};

export default baseUrl;
export { baseAssetsUrl, formatDate, timeAgo };
