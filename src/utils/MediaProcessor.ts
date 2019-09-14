import { MediaItem, imageDetails } from "../models/MediaItem";
import { ParseImageSizes } from "./parseImageSizes";

export const MediaProcessor = {
  getMediaForHeight(mediaData: MediaItem, desiredHeight: number) {
    try {
      // go through the array to find one that fits
      // if none fits, return closest match
      //console.log('starting media processor')
      const sizesRaw: any = mediaData.media_details.sizes;
      const sizesArray: imageDetails[] = ParseImageSizes.asArray(sizesRaw)
      //console.log('size length: ', sizesArray)
      // so sizes is apparently NOT an array
      var bestFitAbove: imageDetails = sizesRaw.full;
      var difference: number = bestFitAbove.height - desiredHeight;
      for (var i = 0; i < sizesArray.length; i++) {
        //console.log('starting iteration: ',i)
        var img: imageDetails = sizesArray[i];
        //console.log('for iteration ', i, ' the img height is: ', img.height)
        if (img.height > desiredHeight) {
          var sizeDifference: number = img.height - desiredHeight;
          //console.log('for iteration ', i, ' the difference is: ', sizeDifference)
          //console.log('for iteration ', i, ' the differences is compared to: ', difference)
          if (sizeDifference < difference) {
            difference = sizeDifference;
            bestFitAbove = img;
          }
        }
      }
      return bestFitAbove.source_url;
    } catch (err) {
      //console.log("getMedaForSize failed");
      return null;
    }
  },
  getMediaForWidth(mediaData: MediaItem, desiredWidth: number) {
    try {
      // go through the array to find one that fits
      // if none fits, return closest match
      const sizes: any = mediaData.media_details.sizes;
      var bestFitAbove: imageDetails = sizes.full
      var difference: number = bestFitAbove.width - desiredWidth;
      for (var i = 0; i < sizes.length; i++) {
        var img: imageDetails = sizes[i];

        if (img.width > desiredWidth) {
          var sizeDifference: number = img.width - desiredWidth;
          if (sizeDifference < difference || difference == null) {
            difference = sizeDifference;
            bestFitAbove = img;
          }
        }
        return 0;
      }
      return bestFitAbove.source_url;
    } catch (err) {
      //console.log("getMedaForSize failed");
      return null;
    }
  },
  getMediaThumbnail(mediaData: MediaItem) {
    try {
      var data: any = mediaData.media_details.sizes;
      return data.thumbnail.source_url;
    } catch (err) {
      //console.log("media fetch error");
      return null;
    }
  },
  getMediaMedium(mediaData: MediaItem) {
    try {
      var data: any = mediaData.media_details.sizes;
      return data.medium.source_url;
    } catch (err) {
      //console.log("media fetch error");
      return null;
    }
  },
  getMediaMediumLarge(mediaData: MediaItem) {
    try {
      var data: any = mediaData.media_details.sizes;
      return data.medium_large.source_url;
    } catch (err) {
      //console.log("media fetch error");
      return;
    }
  },
  getMediaLarge(mediaData: MediaItem) {
    try {
      var data: any = mediaData.media_details.sizes;
      return data.larger.source_url;
    } catch (err) {
      //console.log("media fetch error");
      return;
    }
  },
  getMediaFull(mediaData: MediaItem) {
    try {
      var data: any = mediaData.media_details.sizes;
      return data.full.source_url;
    } catch (err) {
      //console.log("media fetch error");
      return;
    }
  },
  getMediaSlug(mediaData: MediaItem) {
    return mediaData.slug;
  }
};

export default MediaProcessor;
