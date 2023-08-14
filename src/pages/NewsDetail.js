import { Link, useParams } from "react-router-dom";
import { WN_API_KEY, WN_API } from "../env";
import { useState, useEffect, useRef } from "react";
import ky from "ky";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import newsDefaulImage from './../assets/imgs/blog-1.jpg';

function NewsDetail(){
  const {hash} = useParams();
  const [news, setNewsData] = useState({});
  const [loading, setLoading] = useState(true);
  const fetchCount = useRef(0);

  async function fetchOneNews(){
    if(fetchCount.current !== 0){
      return false;
    }
    fetchCount.current++;

    const storageNews = localStorage.getItem(hash);
    if(storageNews !== null){
      setNewsData(JSON.parse(storageNews));
      setLoading(false);
      return false;
    }

    try {
      const url = atob(hash);
      const resp = await ky(`${WN_API}extract-news?api-key=${WN_API_KEY}&url=${url}`).json();
      setNewsData(resp);
      localStorage.setItem(hash, JSON.stringify(resp));
      setLoading(false);
    } catch (err){
      toast.error('Test');
      setLoading(false);
    }
    
  }

  useEffect(()=>{
    fetchOneNews();
  }, []);

  if(loading){
    return <Loader />
  }

  return (
    <div className="container">
      <h1>{news.title}</h1>
      <br />
      <div>
        <img src={news.image ? news.image : newsDefaulImage} alt={news.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
      </div>
      <br />
      <p>{news.text}</p>
      <Link to="/news">To all news</Link>
    </div>
  )
}

export default NewsDetail;