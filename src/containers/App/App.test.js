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
  var url = await GetMedia.byHeight(mediaId, 200)
  expect(url).toEqual( "https://i2.wp.com/munco.ca/wp-content/uploads/2019/09/48982045_2294868810735050_8854120920889950208_o.jpg?resize=280%2C280&ssl=1")
})