import { imageDetails } from "../models/MediaItem";

// take in a list - if 'name' exists, add to array
// place into an array

export const ParseImageSizes = {
  asArray(list: any) {
    var array: imageDetails[] = [];
    if (list.thumbnail) {
      array.push(list.thumbnail);
    }
    if (list.medium) {
      array.push(list.medium);
    }
    if (list.medium_large) {
      array.push(list.medium_large);
    }
    if (list.large) {
      array.push(list.large);
    }
    if (list.woocommerce_thumbnail) {
      array.push(list.woocommerce_thumbnail);
    }
    if (list.woocommerce_single) {
      array.push(list.woocommerce_single);
    }
    if (list.woocommerce_gallery_thumbnail) {
      array.push(list.woocommerce_gallery_thumbnail);
    }
    if (list.shop_catalog) {
      array.push(list.shop_catalog);
    }
    if (list.shop_single) {
      array.push(list.shop_single);
    }
    if (list.shop_thumbnail) {
      array.push(list.shop_thumbnail);
    }
    if (list.full) {
      array.push(list.full);
    }
    return array
  } 
};
