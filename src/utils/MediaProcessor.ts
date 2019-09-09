import { MediaItem, imageDetails } from "../models/MediaItem";
import { number } from "prop-types";

export const MediaProcessor = {
  getMediaForSize(mediaData: MediaItem, desiredHeight: number) {
    try {
      // go through the array to find one that fits
      // if none fits, return closest match
      const sizes: any = mediaData.media_details.sizes;
      console.log("getMediaForSize: ", sizes);
      var bestFitAbove: imageDetails = sizes.full;
      console.log("full: ", bestFitAbove);
      var difference: number = bestFitAbove.height - desiredHeight;
      console.log("difference: ", difference);

      for (var i = 0; i < sizes.length; i++) {
        var img: imageDetails = sizes[i];

        if (img.height > desiredHeight) {
          var sizeDifference: number = img.height - desiredHeight;
          console.log("comparing difference: ", sizeDifference);
          if (sizeDifference < difference || difference == null) {
            bestFitAbove = img;
          }
        }
        return 0;
      }
      return bestFitAbove.source_url;
    } catch (err) {
      console.log("getMedaForSize failed");
      return null;
    }
  },
  getMediaThumbnail(mediaData: MediaItem) {
    try {
      var data: any = mediaData.media_details.sizes;
      console.log(data);
      return data.thumbnail.source_url;
    } catch (err) {
      console.log("media fetch error");
      return null;
    }
  },
  getMediaMedium(mediaData: MediaItem) {
    try {
      var data: any = mediaData.media_details.sizes;
      console.log(data);
      return data.medium.source_url;
    } catch (err) {
      console.log("media fetch error");
      return null;
    }
  },
  getMediaMediumLarge(mediaData: MediaItem) {
    try {
      var data: any = mediaData.media_details.sizes;
      console.log(data);
      return data.medium_large.source_url;
    } catch (err) {
      console.log("media fetch error");
      return;
    }
  },
  getMediaLarge(mediaData: MediaItem) {
    try {
      var data: any = mediaData.media_details.sizes;
      console.log(data);
      return data.larger.source_url;
    } catch (err) {
      console.log("media fetch error");
      return;
    }
  },
  getMediaFull(mediaData: MediaItem) {
    try {
      var data: any = mediaData.media_details.sizes;
      console.log(data);
      return data.full.source_url;
    } catch (err) {
      console.log("media fetch error");
      return;
    }
  },
  getMediaSlug(mediaData: MediaItem) {
    return mediaData.slug;
  }
};

export default MediaProcessor;
