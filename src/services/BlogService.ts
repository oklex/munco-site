import { API } from './constants'
import { SingleBlogPost } from '../models/BlogPost'
import MediaItem from '../models/MediaItem'

export const BlogService = {
    async getMostRecent(): Promise<SingleBlogPost[]> {
        const { data } = await API.get('/posts')
        console.log('getMostRecent', data)
        return data
    },

    async getPostFromID(postId: number): Promise<SingleBlogPost> {
        const { data } = await API.get(`/posts/${postId}`)
        console.log('getPostFromID', data)
        return data
    },

    async getMediaFromID(mediaId: number): Promise<MediaItem> {
        const { data } = await API.get(`/media/${mediaId}`)
        console.log('getMediaFromID', data)
        return data
    }
}