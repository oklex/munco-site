export interface SingleBlogPost {
    id: number,
    date: Date,
    date_gmt: Date,
    guid: any[],
    modified: Date,
    modified_gmt: Date,
    slug: string,
    status: BlogStatus,
    type: PostTypes,
    link: string,
    title: any
    content: BlogPostContent,
    excerpt: BlogPostContent,
    author: number,
    featured_media: number,
    comment_status: string,
    ping_status: string,
    sticky: boolean,
    template: any,
    format: any,
    meta: any,
    categories: any,
    tags: any,
    links: any,
}

export enum BlogStatus {
    publish = 'publish',
    future = 'future',
    draft = 'draft',
    pending = 'pending',
    private = 'private',
    trash = 'trash',
    autoDraft = 'auto-draft',
    inherit = 'inherit'
}

export enum PostTypes {
    post = 'post',
    page = 'page',
    attachment = 'attachment',
    revisions = 'revisions'
}

export interface BlogPostContent {
    rendered: string,
    protected: boolean
}