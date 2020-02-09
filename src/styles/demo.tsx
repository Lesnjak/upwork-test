import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from './theme'
import fonts from './fonts'
import reset from './reset'
import normalize from './normalize'

const GlobalStyle = createGlobalStyle`
  ${fonts}
  ${normalize}
  ${reset}
  #root, html, body {
    height: 100%;
    
  }
  #root{
   display: flex;
   align-items: center;
   justify-content: center;
  }
  body {
    margin: 0;
    font-family: Proxima Nova, sans-serif;
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeightRegular};
    background-color: ${({ theme }) => theme.dropBackground};
  }
`

const Demo = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export { Demo }
