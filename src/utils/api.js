import { apiKey } from "./constants";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";
// Adjust API or CORS for production ???

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
}

function getDate(days) {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString().split("T")[0];
}

const today = getDate(0);
const sevenDaysAgo = getDate(7);

export const searchNews = (query) => {
  return fetch(
    `${baseUrl}?q=${encodeURIComponent(query)}&apiKey=${apiKey}&from=${sevenDaysAgo}&to=${today}&pageSize=100`,
    {
      method: "GET",
    },
  ).then(checkResponse);
};
