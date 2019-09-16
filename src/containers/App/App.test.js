import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GetMedia from '../../utils/GetMediaUrlById';
import { async } from 'q';
import { exportAllDeclaration } from '@babel/types';
import YoastMeta from '../../models/YoastMeta'
import YoastMetaProcessor from '../../utils/YoastMetaProcessor';
import BlogPostProcessor from '../../utils/BlogPostProcessor';
import { BlogService } from '../../services/BlogService';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('loads correct file size', async () => {
  const mediaId = 4853
  var url = await GetMedia.byHeight(mediaId, 10)
  expect(url).toEqual( "https://munco.xyz/wp-content/uploads/2019/09/DSC02971_edited-150x150.jpg")
})

it('get yoast meta tags for post', async () => {
  const postId = 9
  var post = await BlogService.getPostFromID(postId)
  var tags = await YoastMetaProcessor.fromPost(post)
  console.log('tags: ', tags)
  expect(tags)
})