import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

// import * as serviceWorkerRegistration from './serviceWorkerRegistration'
// import './services/notification.service'

import { store } from './store/store'
import { RootCmp } from './root-cmp'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <Provider store={store}>
      <Router>
         <RootCmp />
      </Router>
   </Provider>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA

// serviceWorkerRegistration.register('./services/worker.js')
