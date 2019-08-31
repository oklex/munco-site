import { API } from './constants'
import { SingleBlogPost } from '../models/BlogPost'

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
    }
}