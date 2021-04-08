const NewsFeed = (props) => {

  const { articleList } = props;

  return (
    <div className="news-feed">
      {articleList && articleList.length > 0
      ? <>
          <section className="article-list">
            {articleList.map((article, index) => {
              return (
                <div key={index} className={`article-card ${index === 0 ? 'lg' : 'sm'}`}>
                  <div className="image-container">{article.urlToImage ? <img src={article.urlToImage} alt="article image" /> : <div className="no-image-placeholder">No image found</div>}</div>
                  <section className="article-info">
                    {index === 0 ? <div className="publisher-info">
                      <div>{article.source.name}</div>
                      <div>{article.publishedAt}</div>
                    </div>
                    : <div className="publisher-info"><div>{article.source.name}</div></div>}
                    <h2>{article.title}</h2>
                    {index === 0 && <p>{article.description || "No decsription"}</p>}
                    {index > 0 && <div className="publisher-info">
                      <div>{
                        article.publishedAt
                      }</div>
                    </div>}
                    <div className="read-more-btn">Read more</div>
                  </section>
                </div>
              );
            })}
          </section>
        </>
        : <>
          <div>
            No articles
          </div>
        </>
      }


    </div>
  );
};

export default NewsFeed;