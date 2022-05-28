import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './CardMenu/demo';
import Page2 from "./MatLayout/mui-page-2";
import Page1 from "./MatLayout/mui-page-1";
import ErrorBoundaryExample from "./ErrorBoundary/errorBoundaryExample";
import ErrorBoundaryExample_1 from "./ErrorBoundary/errorBoundaryExample_1";

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <Page1 />
    <br/>
    {/* <Page2 /> */}
    {/* <ErrorBoundaryExample /> */}
  </StyledEngineProvider>, document.querySelector('#root')
);

// ReactDOM.render(
//   <ErrorBoundaryExample_1 />, document.querySelector('#root')
// );
