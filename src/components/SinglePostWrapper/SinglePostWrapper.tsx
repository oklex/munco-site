import React from 'react'
import Interweave from 'interweave'
import { BlogService } from '../../services/BlogService'

interface ISinglePostWrapperProps {
    postId: number,
}

interface ISinglePostWrapperState {
    content: string
}

class SinglePostWrapper extends React.Component<ISinglePostWrapperProps,ISinglePostWrapperState> {
    state = {
        content: ''
    }
    
    componentWillMount = async () => {
        const post = await BlogService.getPostFromID(this.props.postId)
        const postContent = post.content.rendered
        this.setState({
            content: postContent
        })
    }
    
    render() {
        return (
            <div>
                <Interweave content={this.state.content} />
            </div>
        )
    }
}

export default SinglePostWrapper