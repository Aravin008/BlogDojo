import { useParams, useHistory } from 'react-router-dom';
import useFetch from '../utils/useFetch';

const BlogDetail = () => {
  const { id } = useParams();
  const blogUrl = 'http://localhost:8000/blogs/' + id;
  const {data: blog , isPending, error} = useFetch(blogUrl);
  const history = useHistory();

  const handleDelete = () => {
    fetch(blogUrl, {
      method: "DELETE"
    }).then(() => {
      console.log(`Post with id: ${id} deleted.`);
      history.push('/');
    })
  }

  return (
    <div className="blog-preview">
      { isPending && <div>Loading...</div> }
      { error && <div>{error}</div> }
      { blog && 
        <article>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>delete</button>
        </article>
      }
    </div>
  )
}

export default BlogDetail;