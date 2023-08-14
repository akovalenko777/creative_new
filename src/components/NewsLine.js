import { useState, useEffect, useRef } from "react";
import ky from "ky";
import { toast } from "react-toastify";
import { WN_API_KEY, WN_API, NEWS_CACHE_TIME } from "../env";
import Slider from "react-slick";
import NewsItem from "./NewsItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NewsLine(){
  const [newsLine, setNewsLine] = useState([]);
  const fetchCount = useRef(0);

  async function fetchNews(){
    if(fetchCount.current !== 0)
      return false;

    fetchCount.current++;
    const storageNews = localStorage.getItem('newsLine');
    const lastUpdate = +localStorage.getItem('lastNewsUpdate');
    if(storageNews !== null){
      const now = new Date().getTime();
      if((now - lastUpdate) < NEWS_CACHE_TIME){
        setNewsLine(JSON.parse(storageNews));
        return false;
      }
    }

    try {
      const resp = await ky(`${WN_API}search-news?api-key=${WN_API_KEY}&text=design&language=en&number=9`).json();
      setNewsLine(resp.news);
      localStorage.setItem('newsLine', JSON.stringify(resp.news));
      localStorage.setItem('lastNewsUpdate', new Date().getTime());
    } catch (err){
      toast.error('Test');
    }
    

  }

  useEffect(()=>{
    fetchNews();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
        }
      }
    ]
  }

  return (
    <section id="blog">
        <div className="container">
            <h6 className="section-subtitle text-center">Latest News</h6>
            <h6 className="section-title mb-6 text-center">Our Blog</h6>
            <Slider {...sliderSettings}>
              {newsLine.map(item => <NewsItem item={item} key={item.id} />)}
            </Slider>
        </div>
    </section>
  )

}

export default NewsLine;