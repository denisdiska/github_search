import React from 'react'

import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { configureStore } from './store/configureStore'

import { Dashboard } from './pages'
import theme from './theme/defaultTheme'
import './App.css'

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route path="/" component={Dashboard} exact />
            <Redirect to="/github_search" />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

export default App
