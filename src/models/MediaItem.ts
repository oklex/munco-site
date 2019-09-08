export interface MediaItem {
    id: number,
    date: Date,
    date_gmt: Date,
    guid: any,
    slug: string,
    status: string,
    author: string,
    comment_status: string,
    ping_status: string,
    meta: string[],
    template: string,
    media_details: any
}

export default MediaItem