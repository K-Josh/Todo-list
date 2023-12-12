import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const breakpoints = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
}

const theme = extendTheme({
  breakpoints,
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
     <App />
    </ChakraProvider>
  </React.StrictMode>
)
