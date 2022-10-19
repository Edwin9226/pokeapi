
import { ThemeProvider } from '@emotion/react'
import { SnackbarProvider } from 'notistack'
import React, { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import store from './redux/store'
import { AppContainer } from './styled-components/layout.styled.component'
import theme from './theme'
import { SnackbarUtilsConfigurator } from './utilities'

const Login = lazy(()=> import('@/pages/Login/Login'));
function App() {

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <AppContainer className='App'>
        <SnackbarProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Provider store={store}>
            <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route />
            </Routes>
            </BrowserRouter>
          </Provider>
        </Suspense>
        </SnackbarProvider>

        </AppContainer>
      </ThemeProvider>
       </React.StrictMode>
    
  )
}

export default App
