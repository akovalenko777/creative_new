import { Link } from "react-router-dom";

function NewsItem({item}){
  const hash = btoa(item.url);

  return (
    <div className="card blog-post my-4 my-sm-5 my-md-0">
        <img src={item.image} alt={item.title} />
        <div className="card-body">
            <div className="details mb-3">
                {item.publish_date}
            </div>
            <h5 className="card-title">{item.title}</h5>
            <p>{item.summary}</p>
            <Link to={`/news/${hash}`} className="d-block mt-3">Read More...</Link>
        </div>
    </div>
  )
}

export default NewsItem;