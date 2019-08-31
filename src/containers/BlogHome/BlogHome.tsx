import React from 'react'
import { SingleBlogPost } from '../../models/BlogPost'
import { BlogService } from '../../services/BlogService'

interface BlogHomeState {
    BlogPosts: SingleBlogPost[]
}

class BlogHome extends React.Component<{}, BlogHomeState> {
    state = {
        BlogPosts: []
    }

    componentDidMount = async() => {
        console.log(BlogService.getMostRecent())
        // this.setState({
        //     BlogPosts: BlogService.getMostRecent()
        // })
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default BlogHome