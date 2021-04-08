const key = process.env.REACT_APP_NEWS_KEY;

export const getHeadlines = async () => {
  const url =
    `https://newsapi.org/v2/top-headlines?category=technology&pageSize=5&apiKey=${key}`;

  let result = await fetch(url).then(response => response.json());
  return result.articles;
};

export const getHeadlinesFromKeyword = async (word) => {
  const url =
    `https://newsapi.org/v2/top-headlines?q=${word}&pageSize=9&apiKey=${key}`;

    let result = await fetch(url).then(response => response.json());
    return result.articles;

};


export const getHeadlinesFromPublisher = async (source) => {
  const url =
    `https://newsapi.org/v2/top-headlines?sources=${source}&pageSize=9&apiKey=${key}`;

    let result = await fetch(url).then(response => response.json());
    return result.articles;       

};