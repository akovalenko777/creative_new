import { useEffect, useRef, useSyncExternalStore } from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import ServicesList from "../components/ServicesList"
import Counter from "../components/Counter";
import content from "../data/HomeData.json";
import { sidebarNav } from "../data/navigation";
import { itemsStore as todoStore } from "../store/itemsStore";
import NewsLine from "../components/NewsLine";
import FaqList from "../components/FaqList";
import Video from "../components/Video";
import { ParallaxBanner } from "react-scroll-parallax";
// import bg from './../assets/imgs/banner-background.jpg';
import image from './../assets/imgs/header.jpg';


function Home(){
  const inputRef = useRef(null);
  const todos = useSyncExternalStore(todoStore.subscribe, todoStore.getSnapshot);

  function addHandler(){
    todoStore.addItem({
      id: Math.ceil(Math.random() * 10000),
      text: inputRef.current.value
    })
  }

  function deleteHandler(event){
    todoStore.deleteItem(event.target.dataset.id)
  }
  useEffect(()=>{
    window.document.title = content.windowTitle;
  }, []);

  useEffect(()=>{
    fetch('http://localhost:1337/api/articles?populate=*', {
      method: 'get',
      headers: {
        Authorization: 'Bearer 955990a9f5a7ec8148dd710610796f66e13bb0d19a6b096af61677de53964fce52253a96b3ac2948ef3549e7ca7f9f4e82be7553231939290cd848e72d2d433b80e6f9ec4618718f36aacaa2f3cc182f42d247f60ff3e524c358c5c39ce6d37522e76ec23bf71cbf2c34fc743824ca95282c12b9c4f97e69e42694d8705d9ee5'
      }
     
    })
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp);
    })
  })

  function buildNav(menu){
    return (<ul>
      {
        menu.map((item, index)=>{
          return (
            <li key={index}>
              <Link to={item.to}>{item.title}</Link>
              {item.children ? buildNav(item.children) : null}
            </li>
          )
        })
      }
    </ul>)
  }
  return (
    <>
    <div>
    {/* <HeroSection>
      <h6 className="subtitle">{content.subtitle}</h6>
      <h1 className="title">{content.title}</h1>
      <div className="buttons text-center">
          <a href="#service" className="btn btn-primary rounded w-lg btn-lg my-1">Our Service</a>
          <Link to="contacts" className="btn btn-outline-light rounded w-lg btn-lg my-1">Contact Us</Link>
      </div>
    </HeroSection> */}
    <ServicesList />
    <NewsLine />
    <FaqList />
    <div className="container">
      <nav className="groups-nav">
        {buildNav(sidebarNav)}
      </nav>
    </div>
    <Counter />
    </div>
    <div className="container">
      <input type="text" ref={inputRef} />
      <button type="button" onClick={addHandler}>Add</button>
      <hr />
      <ul>
        {todos.map(todo => <li key={todo.id}>{todo.text} <button type="button" data-id={todo.id} onClick={deleteHandler}>delete</button></li>)}
      </ul>
      <Video code="1bvbsx-hpFc" />
      <Video code="jfKfPfyJRdk" />
    </div>
      <ParallaxBanner
        layers={[{ image: image, speed: 55 }]}
        style={{ aspectRatio: '4 / 1' }}
      >
        <div className="parallax-wrapper">
          <h1>Hello React!</h1>
        </div>
      </ParallaxBanner>
    <div class="container">
      <Video code="xCg56q3mfBA" />
      <Video code="TURbeWK2wwg" />
    </div>
    
    </>
  )
}

export default Home;
/**
 * https://www.youtube.com/watch?v=jfKfPfyJRdk
 * https://www.youtube.com/watch?v=xCg56q3mfBA
 * https://www.youtube.com/watch?v=TURbeWK2wwg
 * 
 * 
 */