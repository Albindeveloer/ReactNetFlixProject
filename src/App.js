
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import { useState } from 'react';
import RowPost from './Components/RowPost/RowPost';
import { Action, Orginals } from './urls';

function App() {
  const [post,setPost]=useState([])
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <RowPost url={Orginals} title={"Netflix Originals"}/>
    <RowPost url={Action} title={"Action Movies"} isSmall/>

    {/* <button onClick={()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
        console.log(response.data)
        setPost(response.data)
      })
    }}>click api</button>

    <h1>{post.id}</h1>
    <p>{post.body}</p>

    {
      post.map((obj,index)=>{
        return(
          <div>
            <h2>{index}</h2>
            <h1>{obj.title}</h1>
            <p>{obj.body}</p>
           
          </div>
        )
      })

    } */}
    </div>
  );
}

export default App;
