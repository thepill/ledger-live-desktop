// @flow

import { injectGlobal } from 'styled-components'

/* eslint-disable no-unused-expressions */
injectGlobal`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
    user-select: none;
    cursor: inherit;
    min-width: 0;
  }

  body {
    line-height: 1.5;
    font-size: 16px;
    font-family: "Open Sans", Arial, Helvetica, sans-serif;
    background: white;
  }

  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  b {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }
`
