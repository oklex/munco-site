import React from 'react'
import MediaItem from '../../models/MediaItem'
import { BlogService } from '../../services/BlogService'

interface ISingleBlogLinkProps {
    postId: number,
    featuredMediaId: number,
    postExcerpt: string
}

interface ISingleBlogLinkState {
    mediaData: MediaItem | null
    mediumThumbnailUrl: string | null,
    fullUrl: string | null
}

class SingleBlogLink extends React.Component<ISingleBlogLinkProps,ISingleBlogLinkState> {
    state = {
        mediaData: null,
        mediumThumbnailUrl: null,
        fullUrl: null
    }
    
    componentDidMount = async () => {
        var mediaData = await BlogService.getMediaFromID(this.props.featuredMediaId)
        this.setState({
            mediaData: mediaData,
            mediumThumbnailUrl: mediaData.media_details.sizes.medium_large,
            fullUrl: mediaData.media_details.sizes.full
        })
        console.log(this.state)
    }
    
    render() {
        return (
            <div>
                <p>img</p> <p>title and excerpt</p>
            </div>
        )
    }
}

export default SingleBlogLink