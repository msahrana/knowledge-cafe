import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'


const Blogs = ({handleAddToBookmark, handleTimeSet}) => {
    const [blogs, setBlogs] = useState([])
    
    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            <h3 className="text-4xl">Blogs: {blogs.length}</h3>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}
                handleAddToBookmark = {handleAddToBookmark}
                handleTimeSet = {handleTimeSet}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired,
    handleTimeSet: PropTypes.func.isRequired
}
export default Blogs;