import { number } from "prop-types"

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
    media_details: media_details
}

export interface media_details {
    width: number,
    height: number,
    file: string,
    sizes: any
}

export interface imageDetails {
    file: string,
    width: number,
    height: number,
    mime_type: string,
    source_url: string
}

export default MediaItem