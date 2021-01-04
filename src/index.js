import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { CookiesProvider } from "react-cookie";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Root from './views/root';
import { createUploadLink } from 'apollo-upload-client'


const client = new ApolloClient({

  link: createUploadLink({
    uri: "http://localhost:8000/query"
  }),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <CookiesProvider>

  <ApolloProvider client={client}>

    <Root />
  </ApolloProvider>
  </CookiesProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
