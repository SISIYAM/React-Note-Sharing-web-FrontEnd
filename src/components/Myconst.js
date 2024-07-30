import { format } from "date-fns";

const baseUrl = `http://localhost:8000/api`;
const baseAssetsUrl = `http://localhost:8000/storage/`;

// format timestamp
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return format(date, "d MMM yyyy h:mm a");
};

export default baseUrl;
export { baseAssetsUrl, formatDate };
