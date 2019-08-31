import { API } from './constants'
import { SingleBlogPost } from '../models/BlogPost'

export const BlogService = {
    async getMostRecent(): Promise<SingleBlogPost[]> {
        const { data } = await API.get('/posts')
        return data
    }
}