import React from 'react';
import axios from 'axios';
import './style.css';

const client=axios.create({
  baseURL = 'https://jsonplaceholder.typicode.com/posts/'
});

export default function App() {
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    //invalid url will trigger an 404 error
    Client
      .get("/1")
      .then((response) => {
        setPost(response.data);
      });
  }, []);

  function deletePost(){
    axios
      .delete("/1")
      .then(()=>{
        alert("Post deleted!");
        setPost(null)
      });
  }

  if (error) return `Error:${error.message}`;
  if (!post) return 'NO post!';
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={deletePost}>delete Post </button>
    </div>
  );
}
