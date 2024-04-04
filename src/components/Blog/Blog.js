import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import html from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/night-owl.css'

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('html', html);

const Blog = (props) => {
   let { blogId } = useParams()
   let { data: blog } = useFetch('http://192.168.18.250:1337/api/blogs/' + blogId)

   hljs.configure({
      ignoreUnescapedHTML: true,
   })
   hljs.highlightAll()
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