import axios from "axios"
import { useState } from "react";
import React from "react"
import "./dashboard.css"


function Dashboard() {
    
    const [ posts, setPosts] = useState([])
    
    React.useEffect(() => {
        axios.get(`https://www.reddit.com/r/reactjs.json`)
          .then(res => {
            const newPosts = res.data.data.children
              .map(obj => obj.data);
      
            setPosts(newPosts);
          });
      }, []);


    return (
        <div>
        <h1>Dashboard</h1>
        <ul>
            {posts.map(posts => (
              <div className="container" key={posts.id}>
                 <div className="card">
                     <a href={posts.url} target="blank">
                         <h3>{posts.title}</h3></a><br></br>
                         <p>{posts.author}</p><br></br>
                         <p>{posts.selftext}</p><br></br>
                         <div className="score">
                            <i>Score {posts.score}</i>
                            <i>Submmiting Users {[posts.ups]}</i>
                         </div>
                 </div> 
              </div>
            ) )}
        </ul>
        </div>
    );
}
export default Dashboard;