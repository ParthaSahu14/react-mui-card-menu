import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './demo';
import Page2 from "./mui-page-2";
import Page1 from "./mui-page-1";

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <Page1 />
    <br/>
    {/* <Page2 /> */}
  </StyledEngineProvider>, document.querySelector('#root')
);
