import { WN_API_KEY, WN_API, NEWS_CACHE_TIME } from "../env";
import { useState, useEffect, useRef } from "react";
import NewsItem from "../components/NewsItem";
import ky from "ky";
import { toast } from "react-toastify";
import { ReactComponent as FbIcon } from '../assets/imgs/icons/fb-icon.svg';

function NewsList(){
  const [news, setNews] = useState([]);
  const fetchCount = useRef(0);

  async function fetchNews(){
    if(fetchCount.current !== 0)
      return false;

    fetchCount.current++;
    const storageNews = localStorage.getItem('newsList');
    const lastUpdate = +localStorage.getItem('lastNewsUpdate');
    if(storageNews !== null){
      const now = new Date().getTime();
      if((now - lastUpdate) < NEWS_CACHE_TIME){
        setNews(JSON.parse(storageNews));
        return false;
      }
    }

    try {
      const resp = await ky(`${WN_API}search-news?api-key=${WN_API_KEY}&text=design&language=en&number=12`).json();
      setNews(resp.news);
      localStorage.setItem('newsList', JSON.stringify(resp.news));
      localStorage.setItem('lastNewsUpdate', new Date().getTime());
    } catch (err){
      toast.error('Test');
    }
    

  }

  useEffect(()=>{
    fetchNews();
  }, []);

  return (
    <section id="blog">
        <div className="container">
            <h6 className="section-subtitle text-center">News Feeds</h6>
            <h6 className="section-title mb-6 text-center">Our Blog</h6>
            {/* <FbIcon width="60" height="60" fill="tomato" /> */}
            <div className="row">
                {news.map(item => <div className="col-md-4" key={item.id}><NewsItem item={item} /></div>)}
            </div>
        </div>
    </section>
  )
}

export default NewsList;