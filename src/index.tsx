import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './CardMenu/demo';
import Page2 from "./MatLayout/mui-page-2";
import Page1 from "./MatLayout/mui-page-1";
import ErrorBoundaryExample from "./ErrorBoundary/errorBoundaryExample";
import ErrorBoundaryExample_1 from "./ErrorBoundary/errorBoundaryExample_1";
import Test from "./testAxiosInterceptor/test";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AxiosInterceptorNavigate from './testAxiosInterceptor/requests/AxiosInterceptorNavigate';
import SimpleSnackbar from "./snackbarToast/toast";
import PdfViewer from "./PdfViwer/PdfViewer";

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <BrowserRouter>
      {<AxiosInterceptorNavigate />}
      <Routes>
        <Route path='/intercept' element={<Test />} />
        <Route path='/toast' element={<SimpleSnackbar />} />
        <Route path='/pdf' element={<PdfViewer />} />
      </Routes>
    </BrowserRouter>
  </StyledEngineProvider>, document.querySelector('#root')
);

// ReactDOM.render(
//   <ErrorBoundaryExample_1 />, document.querySelector('#root')
// );
