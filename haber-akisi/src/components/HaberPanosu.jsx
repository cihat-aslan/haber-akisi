import { useEffect } from "react";
import { useState } from "react"


const HaberPanosu = (category) => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=e8a83103f18c433ebb7a8c6177c94e97`;
    fetch(url).then(response => response.json()).then(data => setArticles(data.articles));

  }, [category])

  return (
    <div>
      <h2 className="text-center">Son <span className="badge bg-danger text-white">Haberler</span></h2>
      {articles.map((news, index) => {
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      })}
    </div>
  )
}

export default HaberPanosu