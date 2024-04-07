import FilterSvgIcon from "../../assets/icons/FilterSvgIcon";
import SearchSvgIcon from "../../assets/icons/SearchSvgIcon";
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const BLOGS = gql`
query GetBlogs {
   blogs {
     data {
       id
       attributes {
         title
         content
         createdAt
         updatedAt
         categories {
           data {
             attributes {
               category
             }
           }
         }
       }
     }
   }
 }
`
const CATEGORIES = gql`
query GetCategories {
   categories {
     data {
       attributes {
         category
       }
     }
   }
 }
 `

const Blogs = () => {

   let { data: blogsData } = useQuery(BLOGS)
   let { data: categories } = useQuery(CATEGORIES)

   const whichMonth = givenMonth => {
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
   
      let result = ''
      months.forEach((month, index) => {
         if (givenMonth == index) {
            result = month
         }
      })
      return result
   }
   
   const blogHelper = (blog, component) => {
      if (component === 'title') {
         return blog.attributes.title
      } else if (component === 'text') {
         return blog.attributes.content.find(item => item.type === 'paragraph').children[0].text
      } else if (component === 'categories') {
         return blog.attributes.categories.data
      } else if (component === 'datePosted') {
         let date = new Date(blog.attributes.createdAt)
         return `${ date.getDay() } ${ whichMonth(date.getMonth()) } ${ date.getFullYear() }`
      } else if (component === 'timePosted') {
         let date = new Date(blog.attributes.createdAt)
         return `${ date.getHours() }:${ date.getMinutes() }`
      } else if (component === 'dateUpdated') {
         let date = new Date(blog.attributes.updatedAt)
         return `${ date.getDay() } ${ whichMonth(date.getMonth()) } ${ date.getFullYear() }`
      } else if (component === 'timeUpdated') {
         let date = new Date(blog.attributes.updatedAt)
         return `${ date.getHours() }:${ date.getMinutes() }`
      }
   }

   return (
      <div id='blogs-page' >
         <div id="toolbar">
            <div id="search-box">
               <SearchSvgIcon />
               <input type="search" id="search-blog" name="search-blog"/>
               <FilterSvgIcon />
               {/* <div id="filter-menu">
                  <select id="filter-by-category">
                     <option value="all">All</option>
                     {
                        categories &&

                        categories.categories.data.map(category => (
                           <option value={ category.attributes.category } className="category-item">{ category.attributes.category }</option>
                        ))
                     }
                  </select>
                  <select id="filter-by-time">
                     <option value='newest'>Newest</option>
                     <option value='oldest'>Oldest</option>
                  </select>
                  <div typeof="button">apply</div>
               </div> */}
            </div>
         </div>
         {
            blogsData && 

            blogsData.blogs.data.map(blog => (
               <div className='blog-container'>
                  <div className='blog' key={ blog.id }>
                     <h1>{ blogHelper(blog, 'title').length > 35 ? `${blogHelper(blog, 'title').substring(0, 35)}...` : blogHelper(blog, 'title') }</h1>
                     <p>{ blogHelper(blog, 'text').length > 150 ? `${blogHelper(blog, 'text').substring(0, 150)}...` : blogHelper(blog, 'text') }</p>
                     <div className="dates">
                        <span className="date-container">
                           <span className='dateLabel updated'>updated on : </span>
                           {
                              blogHelper(blog, 'datePosted') != blogHelper(blog, 'dateUpdated') &&
                              blogHelper(blog, 'timePosted') != blogHelper(blog, 'timeUpdated') && 
                              <span className='date updated'>{ blogHelper(blog, 'dateUpdated') } | { blogHelper(blog, 'timeUpdated') }</span>
                           }
                        </span>
                        <br />
                        <span className="date-container">
                           <span className='dateLabel posted'>created on : </span>
                           <span className='date posted'>{ blogHelper(blog, 'datePosted') } | { blogHelper(blog, 'timePosted') }</span>
                        </span>
                     </div>
                     <div className='category-container'>
                        {
                           blogHelper(blog, 'categories').map(categoryItem => (
                              <span className='category'>{ categoryItem.attributes.category }</span>
                           ))
                        }
                     </div>
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