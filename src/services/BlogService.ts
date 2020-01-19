import { wordpressAPI } from './constants'
import { SingleBlogPost } from '../models/BlogPost'
import MediaItem from '../models/MediaItem'

export const BlogService = {
    async getMostRecent(): Promise<SingleBlogPost[]> {
        const { data } = await wordpressAPI.get('/posts?per_page=3')
        // //console.log('getMostRecent', data)
        return data
    },

    async getAll(): Promise<SingleBlogPost[]> {
        const { data } = await wordpressAPI.get('/posts')
        // //console.log('getMostRecent', data)
        return data
    },

    async getPostFromID(postId: number): Promise<SingleBlogPost> {
        const { data } = await wordpressAPI.get(`/posts/${postId}`)
        // //console.log('getPostFromID', data)
        return data
    },

    async getMediaFromID(mediaId: number): Promise<MediaItem> {
        const { data } = await wordpressAPI.get(`/media/${mediaId}`)
        // //console.log('getMediaFromID', data)
        return data
    }
}