import { imageDetails } from "../models/MediaItem";

// take in a list - if 'name' exists, add to array
// place into an array

export const ParseImageSizes = {
  asArray(list: any) {
    var array: imageDetails[] = [];
    var stringifyList = JSON.stringify(list)
    var jsonList = JSON.parse(stringifyList)
    // numbers
    if (jsonList[400]) {
        array.push(jsonList[400])
    } if (jsonList[500]) {
        array.push(jsonList[500])
    }if (jsonList[600]) {
        array.push(jsonList[600])
    }if (jsonList[900]) {
        array.push(jsonList[900])
    }if (jsonList[1000]) {
        array.push(jsonList[1000])
    }
    // names
    if (jsonList.thumbnail) {
        array.push(jsonList.thumbnail)
    }if (jsonList.medium) {
        array.push(jsonList.medium)
    }if (jsonList.medium_large) {
        array.push(jsonList.medium_large)
    }if (jsonList.large) {
        array.push(jsonList.large)
    } if (jsonList.full) {
        array.push(jsonList.full)
    }if (jsonList['post-thumbnail']) {
        array.push(jsonList['post-thumbnail'])
    }
    if (jsonList.full) {
        array.push(jsonList.full)
    }
    return array
  } 
};