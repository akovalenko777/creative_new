// import services from './../data/services.json';

import { useEffect, useState, useSyncExternalStore } from 'react';
import { itemsStore as todoStore } from "../store/itemsStore";

function ServicesList(){
  const [services, setServices] = useState([]);
  const todos = useSyncExternalStore(todoStore.subscribe, todoStore.getSnapshot);

  useEffect(()=>{
    fetch('./pubdata/services.json')
      .then(resp => resp.json())
      .then(resp => {
        setServices(resp);
      })
  }, []);


  return (
    <>
    <div className="box text-center">
      {services.map((item, index)=>{
        return (
          <div className="box-item" key={index}>
            <i className={item.icon}></i>
            <h6 className="box-title">{item.title}</h6>
            <p>{item.descr}</p>
          </div>
        )
      })}
    </div>
    
    <div className="container">
    <ul>
        {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
      </ul>
    </div>
      
    </>
  )
}

export default ServicesList;