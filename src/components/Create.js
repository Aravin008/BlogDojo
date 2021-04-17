import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Mario');  
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const blog = {
      title: title,
      body: body,
      author: author
    };
    
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(blog)
    })
    .then(() => {
      console.log("Successfully created blog!");
      setIsPending(false)
      history.push('/')
    })
  }

  return(
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input 
          type="text"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          />

        <label>Blog body:</label>
        <textarea 
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />

        <label>Blog author:</label>
        <select 
        value={author}
        onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="yoshio">Yoshio</option>
        </select>
        { !isPending && <button>Add Blog</button>}
        { isPending && <button disabled>Adding blog...</button>}
      </form>

      <section style={{margin:"30px auto"}}>
        <h2>Your Inputs</h2>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </section>
    </div>
  )
}

export default Create;