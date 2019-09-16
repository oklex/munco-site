import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GetMedia from '../../utils/GetMediaUrlById';
import { async } from 'q';
import { exportAllDeclaration } from '@babel/types';

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