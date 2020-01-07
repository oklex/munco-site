import React from 'react'
import MediaItem from '../models/MediaItem'
import { BlogService } from '../services/BlogService'
import MediaProcessor from '../utils/MediaProcessor'

interface IImgWrapperProps {
    mediaId: number,
    className?: string,
    height?: number,
    width?:number,
}

interface IImgWrapperState {
    url: string,
    alt: string
}

// this class meant to interface with the wordpress api
class ImgWrapper extends React.Component<IImgWrapperProps,IImgWrapperState> {
    state: IImgWrapperState = {
        url: '',
        alt: ''
    }

    componentDidMount = async () => {
        // process media item
        // select media item (by height first, then width, else full size)
        var mediaItem: MediaItem = await BlogService.getMediaFromID(this.props.mediaId)
        var url: any
        var alt: any
        if (this.props.height) {
            url = await MediaProcessor.getMediaForHeight(mediaItem, this.props.height)
        } else if (this.props.width) {
            url = await MediaProcessor.getMediaForWidth(mediaItem, this.props.width)
        } else {
            url = await MediaProcessor.getMediaFull(mediaItem)
        }
        alt = await MediaProcessor.getMediaAlt(mediaItem)
        if (url) {
            this.setState({
                url
            })
        } 
        if (alt) {
            this.setState({
                alt
            })
        }
    }

    getClassNameIfExists = () => {
        if (this.props.className) {
            return this.props.className
        } else {
            return ''
        }
    }

    render() {
        return (
            <img className={this.getClassNameIfExists()} src={this.state.url} alt={this.state.alt}/>
        )
    }
}

export default ImgWrapper