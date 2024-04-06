import FilterSvgIcon from "../../assets/icons/FilterSvgIcon";
import SearchSvgIcon from "../../assets/icons/SearchSvgIcon";
import useFetch from "../../hooks/useFetch";
import { Link } from 'react-router-dom';

const blogHelper = (blog, component) => {
   if (component === 'title') {
      return blog.attributes.title
   } else if (component === 'text') {
      return blog.attributes.content.find(item => item.type === 'paragraph').children[0].text
   }
}

const Blogs = () => {
   let { data: blogs, isPending, error } = useFetch('http://192.168.18.250:1337/api/blogs')

   return (
      <div id='blogs-page' >
         <div id="toolbar">
            <div id="search-box">
               {/* <label htmlFor="search-blog">Search</label> */}
               <SearchSvgIcon />
               <input type="search" id="search-blog" name="search-blog"/>
               <FilterSvgIcon />
               
            </div>
         </div>
         {
            blogs && 

            blogs.data.map(blog => (
               <div className='blog-container'>
                  <div className='blog' key={ blog.id }>
                     <h1>{ blogHelper(blog, 'title').length > 35 ? `${blogHelper(blog, 'title').substring(0, 35)}...` : blogHelper(blog, 'title') }</h1>
                     <p>{ blogHelper(blog, 'text').length > 150 ? `${blogHelper(blog, 'text').substring(0, 150)}...` : blogHelper(blog, 'text') }</p>
                     <Link to={`/blog/${ blog.id }`} >
                        <div className='button' typeof='button' >Read more</div>
                     </Link>
                  </div>
               </div>
            ))
         }
      </div>
   );
}
 
export default Blogs;