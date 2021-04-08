import './styles/App.css';
import {useState, useEffect} from 'react'

import { getHeadlines, getHeadlinesFromKeyword } from './apiRequests';

import Header from './components/Header';
import NewsFeed from './components/NewsFeed';
import SideBar from './components/SideBar';

console.log(process.env.REACT_APP_NEWS_KEY);

function App() {

  const [articles, setArticles] = useState([]);
  const [publishers] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const fetchHeadlines = () => getHeadlines();

  const searchKeyword = () => {
    getHeadlinesFromKeyword(searchValue).then(list => setArticles(list));
  };

  useEffect( () => {
    fetchHeadlines().then(list => setArticles(list))
  }, []);

  useEffect(() => {
    // console.log('articles change', articles);
  }, [articles]);

  return (
    <div className="App app-layout">
      <Header value={searchValue} change={(value) => setSearchValue(value)} handleClick={() => {searchKeyword()}} />
      <NewsFeed articleList={articles} />
      <SideBar publisherList={publishers} />
    </div>
  );
}

export default App;
