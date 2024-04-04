import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';


const Blog = (props) => {
   let { blogId } = useParams()
   let { data: blog } = useFetch('http://192.168.18.250:1337/api/blogs/' + blogId)
   // console.log(blog)
   return (
      <div id='blog-view'>
         {
            blog &&
            <div>
               <h1>{ blog.data.attributes.title }</h1>
               <BlocksRenderer content={ blog.data.attributes.content } />
            </div>
         }
      </div>
   );
}
 
export default Blog;