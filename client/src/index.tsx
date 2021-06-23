import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './app/store/store'
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from './app/utils/graphql'

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
)
